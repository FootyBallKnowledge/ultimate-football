/* =========================================================
   ULTIMATE FOOTBALL
   API-Football Data Integration
   ========================================================= */

const DATA_URL = "football-data.json";

let footballMatches = [];
let currentMatchFilter = "all";

/* =========================================================
   DEMO DATA FOR OTHER SECTIONS
   These will be replaced with live API data in later steps.
   ========================================================= */

const demoPlayers = [
    {
        name: "Kylian Mbappé",
        position: "Forward",
        team: "Real Madrid",
        nationality: "France",
        goals: 24,
        assists: 8,
        appearances: 30
    },
    {
        name: "Erling Haaland",
        position: "Forward",
        team: "Manchester City",
        nationality: "Norway",
        goals: 28,
        assists: 6,
        appearances: 31
    },
    {
        name: "Mohamed Salah",
        position: "Forward",
        team: "Liverpool",
        nationality: "Egypt",
        goals: 22,
        assists: 11,
        appearances: 29
    },
    {
        name: "Jude Bellingham",
        position: "Midfielder",
        team: "Real Madrid",
        nationality: "England",
        goals: 15,
        assists: 9,
        appearances: 28
    },
    {
        name: "Vinícius Júnior",
        position: "Forward",
        team: "Real Madrid",
        nationality: "Brazil",
        goals: 19,
        assists: 12,
        appearances: 27
    },
    {
        name: "Harry Kane",
        position: "Forward",
        team: "Bayern Munich",
        nationality: "England",
        goals: 26,
        assists: 7,
        appearances: 30
    }
];

const demoTeams = [
    {
        name: "Arsenal",
        country: "England",
        league: "Premier League",
        form: ["W", "W", "D", "W", "W"]
    },
    {
        name: "Real Madrid",
        country: "Spain",
        league: "La Liga",
        form: ["W", "W", "W", "D", "W"]
    },
    {
        name: "Bayern Munich",
        country: "Germany",
        league: "Bundesliga",
        form: ["W", "L", "W", "W", "W"]
    },
    {
        name: "Manchester City",
        country: "England",
        league: "Premier League",
        form: ["W", "D", "W", "W", "L"]
    },
    {
        name: "Barcelona",
        country: "Spain",
        league: "La Liga",
        form: ["W", "W", "D", "W", "W"]
    },
    {
        name: "Liverpool",
        country: "England",
        league: "Premier League",
        form: ["W", "W", "W", "D", "W"]
    }
];

const demoStandings = [
    ["Arsenal", 30, 22, 5, 3, 71, 25, 71],
    ["Liverpool", 30, 21, 6, 3, 68, 28, 69],
    ["Manchester City", 30, 20, 7, 3, 65, 29, 67],
    ["Chelsea", 30, 17, 6, 7, 54, 35, 57],
    ["Manchester United", 30, 15, 7, 8, 50, 39, 52],
    ["Newcastle United", 30, 14, 8, 8, 48, 38, 50]
];

const demoScorers = [
    ["Erling Haaland", "Manchester City", 28],
    ["Harry Kane", "Bayern Munich", 26],
    ["Kylian Mbappé", "Real Madrid", 24],
    ["Mohamed Salah", "Liverpool", 22],
    ["Vinícius Júnior", "Real Madrid", 19]
];

const demoNews = [
    {
        title: "Ultimate Football is now connected to live football data",
        category: "Football",
        text: "The website is now prepared to display automatically updated football fixtures."
    },
    {
        title: "European football enters another exciting stage",
        category: "Leagues",
        text: "Follow fixtures, results and competition information in one place."
    },
    {
        title: "Player statistics remain at the heart of modern football",
        category: "Players",
        text: "Goals, assists and appearances help provide a broader picture of player performance."
    },
    {
        title: "Follow your favourite clubs",
        category: "Teams",
        text: "Team information, recent form and squad details are coming to Ultimate Football."
    }
];

/* =========================================================
   BASIC HELPERS
   ========================================================= */

function el(id) {
    return document.getElementById(id);
}

function safe(value) {
    if (value === null || value === undefined) return "";

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function escapeImage(url) {
    if (!url) return "";

    try {
        const parsed = new URL(url);

        if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
            return "";
        }

        return safe(parsed.href);
    } catch {
        return "";
    }
}

/* =========================================================
   DATE / STATUS HELPERS
   ========================================================= */

function getMatchStatus(match) {
    const status = match?.fixture?.status?.short || "";

    const liveStatuses = [
        "1H",
        "HT",
        "2H",
        "ET",
        "BT",
        "P",
        "LIVE"
    ];

    const finishedStatuses = [
        "FT",
        "AET",
        "PEN"
    ];

    if (liveStatuses.includes(status)) {
        return "live";
    }

    if (finishedStatuses.includes(status)) {
        return "result";
    }

    return "upcoming";
}

function getStatusText(match) {
    const status = match?.fixture?.status?.short || "";
    const longStatus = match?.fixture?.status?.long || "";

    if (["1H", "2H", "ET", "BT", "P"].includes(status)) {
        const elapsed = match?.fixture?.status?.elapsed;

        if (elapsed) {
            return `${elapsed}' LIVE`;
        }

        return "LIVE";
    }

    if (status === "HT") {
        return "HALF TIME";
    }

    if (["FT", "AET", "PEN"].includes(status)) {
        return status === "FT" ? "FULL TIME" : longStatus || status;
    }

    return formatMatchDate(match?.fixture?.date);
}

function formatMatchDate(dateString) {
    if (!dateString) return "Date TBC";

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
        return "Date TBC";
    }

    return date.toLocaleString([], {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit"
    });
}

/* =========================================================
   LOAD FOOTBALL DATA
   ========================================================= */

async function loadFootballData() {
    const statusBox = el("dataStatus");

    try {
        if (statusBox) {
            statusBox.textContent = "Loading live football data...";
        }

        const response = await fetch(`${DATA_URL}?v=${Date.now()}`, {
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data.response)) {
            footballMatches = data.response;
        } else {
            footballMatches = [];
        }

        renderMatches(currentMatchFilter);
        renderFeaturedMatch();

        if (statusBox) {
            statusBox.textContent =
                `Live football data loaded • ${footballMatches.length} matches`;
        }

        console.log(
            "Ultimate Football: API data loaded",
            footballMatches
        );

    } catch (error) {
        console.error("Unable to load football data:", error);

        footballMatches = [];

        renderMatches(currentMatchFilter);

        if (statusBox) {
            statusBox.textContent =
                "Football data temporarily unavailable";
        }
    }
}

/* =========================================================
   MATCH FILTERING
   ========================================================= */

function filterMatches(matches, filter) {
    if (!Array.isArray(matches)) return [];

    if (filter === "live") {
        return matches.filter(match => getMatchStatus(match) === "live");
    }

    if (filter === "upcoming") {
        return matches.filter(match => getMatchStatus(match) === "upcoming");
    }

    if (filter === "result") {
        return matches.filter(match => getMatchStatus(match) === "result");
    }

    return matches;
}

/* =========================================================
   RENDER MATCHES
   ========================================================= */

function renderMatches(filter = "all") {
    const container = el("matchesContainer");

    if (!container) return;

    currentMatchFilter = filter;

    const matches = filterMatches(footballMatches, filter);

    if (!matches.length) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>No matches found</h3>
                <p>
                    There are currently no matches in this category.
                    Try another filter.
                </p>
            </div>
        `;

        return;
    }

    container.innerHTML = matches
        .map((match) => createMatchCard(match))
        .join("");
}

function createMatchCard(match) {
    const fixture = match?.fixture || {};
    const league = match?.league || {};
    const teams = match?.teams || {};
    const goals = match?.goals || {};

    const home = teams.home || {};
    const away = teams.away || {};

    const statusType = getMatchStatus(match);
    const statusText = getStatusText(match);

    const homeGoals =
        goals.home === null || goals.home === undefined
            ? "-"
            : goals.home;

    const awayGoals =
        goals.away === null || goals.away === undefined
            ? "-"
            : goals.away;

    const homeLogo = escapeImage(home.logo);
    const awayLogo = escapeImage(away.logo);
    const leagueLogo = escapeImage(league.logo);

    return `
        <article class="match-card">

            <div class="match-card-header">

                <div class="match-league">

                    ${
                        leagueLogo
                            ? `<img
                                src="${leagueLogo}"
                                alt="${safe(league.name || "League")}"
                                loading="lazy"
                               >`
                            : ""
                    }

                    <span>${safe(league.name || "Football")}</span>

                </div>

                <span class="match-status ${statusType}">
                    ${safe(statusText)}
                </span>

            </div>

            <div class="match-teams">

                <div class="team-side">

                    ${
                        homeLogo
                            ? `<img
                                src="${homeLogo}"
                                alt="${safe(home.name || "Home team")}"
                                class="team-logo"
                                loading="lazy"
                               >`
                            : `<div class="team-logo-placeholder">⚽</div>`
                    }

                    <span>${safe(home.name || "Home Team")}</span>

                </div>

                <div class="match-score">

                    <strong>
                        ${safe(homeGoals)}
                        <span>–</span>
                        ${safe(awayGoals)}
                    </strong>

                    <small>
                        ${safe(
                            fixture.venue?.name ||
                            "Football Stadium"
                        )}
                    </small>

                </div>

                <div class="team-side">

                    ${
                        awayLogo
                            ? `<img
                                src="${awayLogo}"
                                alt="${safe(away.name || "Away team")}"
                                class="team-logo"
                                loading="lazy"
                               >`
                            : `<div class="team-logo-placeholder">⚽</div>`
                    }

                    <span>${safe(away.name || "Away Team")}</span>

                </div>

            </div>

            <div class="match-card-footer">

                <span>
                    ${safe(
                        fixture.date
                            ? formatMatchDate(fixture.date)
                            : "Date TBC"
                    )}
                </span>

                <span>
                    ${safe(league.country || "")}
                </span>

            </div>

        </article>
    `;
}

/* =========================================================
   FEATURED MATCH
   ========================================================= */

function renderFeaturedMatch() {
    const featured = el("featuredMatch");

    if (!featured) return;

    if (!footballMatches.length) {
        return;
    }

    const liveMatches = footballMatches.filter(
        match => getMatchStatus(match) === "live"
    );

    const upcomingMatches = footballMatches.filter(
        match => getMatchStatus(match) === "upcoming"
    );

    const selected =
        liveMatches[0] ||
        upcomingMatches[0] ||
        footballMatches[0];

    if (!selected) return;

    const fixture = selected.fixture || {};
    const league = selected.league || {};
    const teams = selected.teams || {};
    const goals = selected.goals || {};

    const home = teams.home || {};
    const away = teams.away || {};

    const homeLogo = escapeImage(home.logo);
    const awayLogo = escapeImage(away.logo);

    featured.innerHTML = `
        <div class="featured-match-content">

            <div class="featured-league">
                ${safe(league.name || "Football")}
            </div>

            <div class="featured-teams">

                <div>
                    ${
                        homeLogo
                            ? `<img
                                src="${homeLogo}"
                                alt="${safe(home.name)}"
                                loading="lazy"
                               >`
                            : "⚽"
                    }

                    <strong>${safe(home.name || "Home")}</strong>
                </div>

                <div class="featured-score">

                    <strong>
                        ${
                            goals.home === null ||
                            goals.home === undefined
                                ? "-"
                                : goals.home
                        }

                        <span>–</span>

                        ${
                            goals.away === null ||
                            goals.away === undefined
                                ? "-"
                                : goals.away
                        }
                    </strong>

                    <small>
                        ${safe(getStatusText(selected))}
                    </small>

                </div>

                <div>
                    ${
                        awayLogo
                            ? `<img
                                src="${awayLogo}"
                                alt="${safe(away.name)}"
                                loading="lazy"
                               >`
                            : "⚽"
                    }

                    <strong>${safe(away.name || "Away")}</strong>
                </div>

            </div>

            <p>
                ${safe(
                    fixture.venue?.name ||
                    formatMatchDate(fixture.date)
                )}
            </p>

        </div>
    `;
}

/* =========================================================
   PLAYERS
   ========================================================= */

function renderPlayers() {
    const container = el("playersContainer");

    if (!container) return;

    container.innerHTML = demoPlayers
        .map(player => `
            <article class="player-card">

                <div class="player-image">
                    ⚽
                </div>

                <div class="player-info">

                    <h3>${safe(player.name)}</h3>

                    <p>
                        ${safe(player.position)} •
                        ${safe(player.team)}
                    </p>

                    <small>
                        ${safe(player.nationality)}
                    </small>

                </div>

                <div class="player-stats">

                    <div>
                        <strong>${player.goals}</strong>
                        <span>Goals</span>
                    </div>

                    <div>
                        <strong>${player.assists}</strong>
                        <span>Assists</span>
                    </div>

                    <div>
                        <strong>${player.appearances}</strong>
                        <span>Apps</span>
                    </div>

                </div>

            </article>
        `)
        .join("");
}

/* =========================================================
   TEAMS
   ========================================================= */

function renderTeams() {
    const container = el("teamsContainer");

    if (!container) return;

    container.innerHTML = demoTeams
        .map(team => `
            <article class="team-card">

                <div class="team-card-icon">
                    ⚽
                </div>

                <h3>${safe(team.name)}</h3>

                <p>${safe(team.league)}</p>

                <small>${safe(team.country)}</small>

                <div class="team-form">

                    ${team.form
                        .map(result => `
                            <span class="form-badge ${result.toLowerCase()}">
                                ${safe(result)}
                            </span>
                        `)
                        .join("")}

                </div>

            </article>
        `)
        .join("");
}

/* =========================================================
   STANDINGS
   ========================================================= */

function renderStandings() {
    const table = el("standingsTable");

    if (!table) return;

    table.innerHTML = `
        <thead>
            <tr>
                <th>#</th>
                <th>Team</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>Pts</th>
            </tr>
        </thead>

        <tbody>

            ${demoStandings
                .map((team, index) => `
                    <tr>

                        <td>${index + 1}</td>

                        <td>
                            <strong>${safe(team[0])}</strong>
                        </td>

                        <td>${team[1]}</td>
                        <td>${team[2]}</td>
                        <td>${team[3]}</td>
                        <td>${team[4]}</td>
                        <td>${team[5]}</td>
                        <td>${team[6]}</td>

                        <td>
                            <strong>${team[7]}</strong>
                        </td>

                    </tr>
                `)
                .join("")}

        </tbody>
    `;
}

/* =========================================================
   TOP SCORERS
   ========================================================= */

function renderScorers() {
    const container = el("scorersContainer");

    if (!container) return;

    container.innerHTML = demoScorers
        .map((scorer, index) => `
            <div class="scorer-row">

                <span class="scorer-rank">
                    ${index + 1}
                </span>

                <div class="scorer-info">
                    <strong>${safe(scorer[0])}</strong>
                    <small>${safe(scorer[1])}</small>
                </div>

                <strong class="scorer-goals">
                    ${scorer[2]}
                </strong>

            </div>
        `)
        .join("");
}

/* =========================================================
   NEWS
   ========================================================= */

function renderNews() {
    const container = el("newsContainer");

    if (!container) return;

    container.innerHTML = demoNews
        .map(article => `
            <article class="news-card">

                <div class="news-category">
                    ${safe(article.category)}
                </div>

                <h3>${safe(article.title)}</h3>

                <p>${safe(article.text)}</p>

                <span class="news-link">
                    Read more →
                </span>

            </article>
        `)
        .join("");
}

/* =========================================================
   SEARCH
   ========================================================= */

function setupSearch() {
    const input = el("searchInput");
    const results = el("searchResults");

    if (!input || !results) return;

    const searchableData = [
        ...demoPlayers.map(player => ({
            type: "Player",
            name: player.name,
            detail: `${player.team} • ${player.position}`
        })),

        ...demoTeams.map(team => ({
            type: "Team",
            name: team.name,
            detail: `${team.league} • ${team.country}`
        })),

        "Premier League",
        "La Liga",
        "Bundesliga",
        "Serie A",
        "Ligue 1",
        "UEFA Champions League",
        "UEFA Europa League"
    ];

    input.addEventListener("input", () => {
        const query = input.value.trim().toLowerCase();

        if (!query) {
            results.innerHTML = `
                <p class="search-placeholder">
                    Search for a player, team or league.
                </p>
            `;

            return;
        }

        const matches = searchableData.filter(item => {
            if (typeof item === "string") {
                return item.toLowerCase().includes(query);
            }

            return (
                item.name.toLowerCase().includes(query) ||
                item.detail.toLowerCase().includes(query)
            );
        });

        if (!matches.length) {
            results.innerHTML = `
                <p class="search-placeholder">
                    No results found for
                    "<strong>${safe(input.value)}</strong>".
                </p>
            `;

            return;
        }

        results.innerHTML = matches
            .slice(0, 12)
            .map(item => {

                if (typeof item === "string") {
                    return `
                        <div class="search-result">
                            <strong>${safe(item)}</strong>
                            <small>League</small>
                        </div>
                    `;
                }

                return `
                    <div class="search-result">
                        <strong>${safe(item.name)}</strong>
                        <small>
                            ${safe(item.type)} •
                            ${safe(item.detail)}
                        </small>
                    </div>
                `;
            })
            .join("");
    });
}

/* =========================================================
   MATCH FILTER BUTTONS
   ========================================================= */

function setupFilters() {
    const buttons = document.querySelectorAll(
        "[data-match-filter]"
    );

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const filter =
                button.dataset.matchFilter || "all";

            renderMatches(filter);
        });

    });
}

/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {
    const button = el("mobileMenuBtn");
    const nav = document.querySelector(".main-nav");

    if (!button || !nav) return;

    button.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
        });
    });
}

/* =========================================================
   THEME
   ========================================================= */

function setupTheme() {
    const button = el("themeToggle");

    if (!button) return;

    const savedTheme =
        localStorage.getItem("ultimateFootballTheme");

    const preferredTheme =
        savedTheme ||
        (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: light)").matches
                ? "light"
                : "dark"
        );

    applyTheme(preferredTheme);

    button.addEventListener("click", () => {

        const current =
            document.documentElement.dataset.theme ||
            "dark";

        const next =
            current === "dark"
                ? "light"
                : "dark";

        applyTheme(next);

        localStorage.setItem(
            "ultimateFootballTheme",
            next
        );
    });
}

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;

    const button = el("themeToggle");

    if (button) {
        button.textContent =
            theme === "dark"
                ? "☀️"
                : "🌙";

        button.setAttribute(
            "aria-label",
            theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
        );
    }
}

/* =========================================================
   CURRENT YEAR
   ========================================================= */

function setupYear() {
    const year = el("currentYear");

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }
}

/* =========================================================
   SMOOTH SCROLLING
   ========================================================= */

function setupSmoothScroll() {
    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });
}

/* =========================================================
   INITIALIZATION
   ========================================================= */

async function init() {

    setupFilters();
    setupSearch();
    setupMobileMenu();
    setupTheme();
    setupYear();
    setupSmoothScroll();

    renderPlayers();
    renderTeams();
    renderStandings();
    renderScorers();
    renderNews();

    await loadFootballData();
}

/* =========================================================
   START
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    init
);
