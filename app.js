/* =========================================================
   ULTIMATE FOOTBALL
   Demo Football Portal
   No API key required
   ========================================================= */

"use strict";

/* =========================================================
   DEMO MODE
   ========================================================= */

const DEMO_MODE = true;


/* =========================================================
   DEMO MATCH DATA
   ========================================================= */

const matches = [
    {
        status: "live",
        league: "Premier League",
        home: "Arsenal",
        away: "Chelsea",
        homeCode: "ARS",
        awayCode: "CHE",
        homeScore: 2,
        awayScore: 1,
        time: "67'",
        date: "Today"
    },
    {
        status: "upcoming",
        league: "La Liga",
        home: "Real Madrid",
        away: "Barcelona",
        homeCode: "RMA",
        awayCode: "BAR",
        homeScore: null,
        awayScore: null,
        time: "20:00",
        date: "Today"
    },
    {
        status: "upcoming",
        league: "Bundesliga",
        home: "Bayern Munich",
        away: "Borussia Dortmund",
        homeCode: "BAY",
        awayCode: "BVB",
        homeScore: null,
        awayScore: null,
        time: "18:30",
        date: "Tomorrow"
    },
    {
        status: "result",
        league: "Serie A",
        home: "Inter Milan",
        away: "AC Milan",
        homeCode: "INT",
        awayCode: "MIL",
        homeScore: 2,
        awayScore: 0,
        time: "FT",
        date: "Yesterday"
    },
    {
        status: "result",
        league: "Ligue 1",
        home: "Paris Saint-Germain",
        away: "Marseille",
        homeCode: "PSG",
        awayCode: "OM",
        homeScore: 3,
        awayScore: 1,
        time: "FT",
        date: "Yesterday"
    },
    {
        status: "live",
        league: "Champions League",
        home: "Manchester City",
        away: "Inter Milan",
        homeCode: "MCI",
        awayCode: "INT",
        homeScore: 1,
        awayScore: 1,
        time: "54'",
        date: "Today"
    },
    {
        status: "upcoming",
        league: "Europa League",
        home: "Liverpool",
        away: "Roma",
        homeCode: "LIV",
        awayCode: "ROM",
        homeScore: null,
        awayScore: null,
        time: "21:00",
        date: "Tomorrow"
    },
    {
        status: "result",
        league: "Premier League",
        home: "Manchester United",
        away: "Tottenham",
        homeCode: "MUN",
        awayCode: "TOT",
        homeScore: 2,
        awayScore: 2,
        time: "FT",
        date: "Yesterday"
    }
];


/* =========================================================
   DEMO PLAYER DATA
   ========================================================= */

const players = [
    {
        name: "Kylian Mbappé",
        club: "Real Madrid",
        position: "Forward",
        goals: 28,
        assists: 9,
        appearances: 32,
        emoji: "⚡"
    },
    {
        name: "Erling Haaland",
        club: "Manchester City",
        position: "Forward",
        goals: 31,
        assists: 6,
        appearances: 30,
        emoji: "🎯"
    },
    {
        name: "Mohamed Salah",
        club: "Liverpool",
        position: "Forward",
        goals: 24,
        assists: 12,
        appearances: 33,
        emoji: "🔥"
    },
    {
        name: "Jude Bellingham",
        club: "Real Madrid",
        position: "Midfielder",
        goals: 15,
        assists: 10,
        appearances: 31,
        emoji: "⭐"
    },
    {
        name: "Vinícius Júnior",
        club: "Real Madrid",
        position: "Forward",
        goals: 21,
        assists: 13,
        appearances: 29,
        emoji: "⚽"
    },
    {
        name: "Harry Kane",
        club: "Bayern Munich",
        position: "Forward",
        goals: 27,
        assists: 7,
        appearances: 30,
        emoji: "🏹"
    },
    {
        name: "Lamine Yamal",
        club: "Barcelona",
        position: "Forward",
        goals: 14,
        assists: 15,
        appearances: 31,
        emoji: "🌟"
    },
    {
        name: "Bukayo Saka",
        club: "Arsenal",
        position: "Forward",
        goals: 18,
        assists: 11,
        appearances: 30,
        emoji: "🔴"
    }
];


/* =========================================================
   DEMO TEAM DATA
   ========================================================= */

const teams = [
    {
        name: "Arsenal",
        league: "Premier League",
        code: "ARS",
        stadium: "Emirates Stadium",
        manager: "Mikel Arteta",
        squad: ["Bukayo Saka", "Martin Ødegaard", "Declan Rice"],
        form: ["w", "w", "d", "w", "w"]
    },
    {
        name: "Real Madrid",
        league: "La Liga",
        code: "RMA",
        stadium: "Santiago Bernabéu",
        manager: "Xabi Alonso",
        squad: ["Kylian Mbappé", "Jude Bellingham", "Vinícius Júnior"],
        form: ["w", "w", "w", "d", "w"]
    },
    {
        name: "Bayern Munich",
        league: "Bundesliga",
        code: "BAY",
        stadium: "Allianz Arena",
        manager: "Vincent Kompany",
        squad: ["Harry Kane", "Jamal Musiala", "Joshua Kimmich"],
        form: ["w", "d", "w", "w", "w"]
    },
    {
        name: "Manchester City",
        league: "Premier League",
        code: "MCI",
        stadium: "Etihad Stadium",
        manager: "Pep Guardiola",
        squad: ["Erling Haaland", "Phil Foden", "Rodri"],
        form: ["d", "w", "w", "d", "w"]
    },
    {
        name: "Barcelona",
        league: "La Liga",
        code: "BAR",
        stadium: "Spotify Camp Nou",
        manager: "Hansi Flick",
        squad: ["Lamine Yamal", "Pedri", "Robert Lewandowski"],
        form: ["w", "w", "w", "w", "d"]
    },
    {
        name: "Liverpool",
        league: "Premier League",
        code: "LIV",
        stadium: "Anfield",
        manager: "Arne Slot",
        squad: ["Mohamed Salah", "Virgil van Dijk", "Luis Díaz"],
        form: ["w", "w", "d", "w", "w"]
    }
];


/* =========================================================
   DEMO STANDINGS
   ========================================================= */

const standings = [
    {
        position: 1,
        team: "Arsenal",
        code: "ARS",
        played: 20,
        wins: 15,
        draws: 3,
        losses: 2,
        points: 48
    },
    {
        position: 2,
        team: "Liverpool",
        code: "LIV",
        played: 20,
        wins: 14,
        draws: 4,
        losses: 2,
        points: 46
    },
    {
        position: 3,
        team: "Manchester City",
        code: "MCI",
        played: 20,
        wins: 13,
        draws: 5,
        losses: 2,
        points: 44
    },
    {
        position: 4,
        team: "Chelsea",
        code: "CHE",
        played: 20,
        wins: 12,
        draws: 4,
        losses: 4,
        points: 40
    },
    {
        position: 5,
        team: "Manchester United",
        code: "MUN",
        played: 20,
        wins: 10,
        draws: 5,
        losses: 5,
        points: 35
    },
    {
        position: 6,
        team: "Tottenham",
        code: "TOT",
        played: 20,
        wins: 9,
        draws: 4,
        losses: 7,
        points: 31
    }
];


/* =========================================================
   TOP SCORERS
   ========================================================= */

const scorers = [
    {
        name: "Erling Haaland",
        club: "Manchester City",
        goals: 31,
        emoji: "🎯"
    },
    {
        name: "Kylian Mbappé",
        club: "Real Madrid",
        goals: 28,
        emoji: "⚡"
    },
    {
        name: "Harry Kane",
        club: "Bayern Munich",
        goals: 27,
        emoji: "🏹"
    },
    {
        name: "Mohamed Salah",
        club: "Liverpool",
        goals: 24,
        emoji: "🔥"
    },
    {
        name: "Vinícius Júnior",
        club: "Real Madrid",
        goals: 21,
        emoji: "⚽"
    }
];


/* =========================================================
   DEMO NEWS
   ========================================================= */

const news = [
    {
        category: "MATCH CENTRE",
        date: "Demo",
        title: "Weekend Match Centre: Fixtures to Watch",
        description:
            "Explore upcoming fixtures, recent results and featured matches from Europe's major competitions.",
        emoji: "📰"
    },
    {
        category: "TACTICS",
        date: "Demo",
        title: "How Tactical Systems Shape Modern Football",
        description:
            "A look at how formations, pressing and possession influence the modern game.",
        emoji: "📋"
    },
    {
        category: "PLAYERS",
        date: "Demo",
        title: "The Rise of the Modern Attacking Player",
        description:
            "Speed, creativity and versatility are becoming increasingly important qualities for attacking players.",
        emoji: "⚡"
    },
    {
        category: "LEAGUES",
        date: "Demo",
        title: "Europe's Major Football Leagues",
        description:
            "Follow the Premier League, La Liga, Bundesliga, Serie A and Ligue 1 in one place.",
        emoji: "🌍"
    }
];


/* =========================================================
   LEAGUES FOR SEARCH
   ========================================================= */

const leagues = [
    "Premier League",
    "La Liga",
    "Bundesliga",
    "Serie A",
    "Ligue 1",
    "Champions League",
    "Europa League"
];


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const matchesContainer = document.getElementById("matchesContainer");
const playersContainer = document.getElementById("playersContainer");
const teamsContainer = document.getElementById("teamsContainer");
const standingsTable = document.getElementById("standingsTable");
const scorersContainer = document.getElementById("scorersContainer");
const newsContainer = document.getElementById("newsContainer");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const themeToggle = document.getElementById("themeToggle");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");

const currentYear = document.getElementById("currentYear");


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   MATCHES
   ========================================================= */

function renderMatches(filter = "all") {

    if (!matchesContainer) return;

    let filteredMatches = matches;

    if (filter !== "all") {
        filteredMatches = matches.filter(match => match.status === filter);
    }

    if (filteredMatches.length === 0) {
        matchesContainer.innerHTML = `
            <div class="empty-state">
                <p>No matches found for this category.</p>
            </div>
        `;
        return;
    }

    matchesContainer.innerHTML = filteredMatches.map(match => {

        let statusText = "";

        if (match.status === "live") {
            statusText = "LIVE";
        } else if (match.status === "upcoming") {
            statusText = match.time;
        } else {
            statusText = "FT";
        }

        const scoreDisplay =
            match.status === "upcoming"
                ? `<span class="match-time">${escapeHtml(match.time)}</span>`
                : `
                    <span class="score">
                        ${escapeHtml(match.homeScore)} - ${escapeHtml(match.awayScore)}
                    </span>
                `;

        return `
            <article class="match-card">

                <div class="match-card-top">
                    <span class="match-league">
                        ${escapeHtml(match.league)}
                    </span>

                    <span class="match-status ${escapeHtml(match.status)}">
                        ${escapeHtml(statusText)}
                    </span>
                </div>

                <div class="match-teams">

                    <div class="team-side">
                        <div class="team-code">
                            ${escapeHtml(match.homeCode)}
                        </div>

                        <strong>
                            ${escapeHtml(match.home)}
                        </strong>
                    </div>

                    <div class="match-score">
                        ${scoreDisplay}
                    </div>

                    <div class="team-side">
                        <div class="team-code">
                            ${escapeHtml(match.awayCode)}
                        </div>

                        <strong>
                            ${escapeHtml(match.away)}
                        </strong>
                    </div>

                </div>

                <div class="match-date">
                    ${escapeHtml(match.date)}
                </div>

            </article>
        `;

    }).join("");
}


/* =========================================================
   PLAYERS
   ========================================================= */

function renderPlayers() {

    if (!playersContainer) return;

    playersContainer.innerHTML = players.map(player => {

        return `
            <article class="player-card">

                <div class="player-image">
                    ${escapeHtml(player.emoji)}
                </div>

                <div class="player-info">

                    <h3>${escapeHtml(player.name)}</h3>

                    <p class="player-club">
                        ${escapeHtml(player.club)}
                    </p>

                    <span class="player-position">
                        ${escapeHtml(player.position)}
                    </span>

                    <div class="player-stats">

                        <div>
                            <strong>${escapeHtml(player.goals)}</strong>
                            <span>Goals</span>
                        </div>

                        <div>
                            <strong>${escapeHtml(player.assists)}</strong>
                            <span>Assists</span>
                        </div>

                        <div>
                            <strong>${escapeHtml(player.appearances)}</strong>
                            <span>Apps</span>
                        </div>

                    </div>

                </div>

            </article>
        `;

    }).join("");
}


/* =========================================================
   TEAMS
   ========================================================= */

function renderTeams() {

    if (!teamsContainer) return;

    teamsContainer.innerHTML = teams.map(team => {

        const formHtml = team.form.map(result => {

            let label = "";

            if (result === "w") label = "W";
            if (result === "d") label = "D";
            if (result === "l") label = "L";

            return `
                <span class="form-badge ${escapeHtml(result)}">
                    ${label}
                </span>
            `;

        }).join("");

        return `
            <article class="team-card">

                <div class="team-card-header">

                    <div class="team-code large">
                        ${escapeHtml(team.code)}
                    </div>

                    <div>
                        <h3>${escapeHtml(team.name)}</h3>
                        <p>${escapeHtml(team.league)}</p>
                    </div>

                </div>

                <div class="team-details">

                    <p>
                        <strong>Stadium:</strong>
                        ${escapeHtml(team.stadium)}
                    </p>

                    <p>
                        <strong>Manager:</strong>
                        ${escapeHtml(team.manager)}
                    </p>

                </div>

                <div class="team-squad">

                    <h4>Key Players</h4>

                    <ul>
                        ${team.squad.map(player => `
                            <li>${escapeHtml(player)}</li>
                        `).join("")}
                    </ul>

                </div>

                <div class="team-form">

                    <h4>Recent Form</h4>

                    <div class="form-list">
                        ${formHtml}
                    </div>

                </div>

            </article>
        `;

    }).join("");
}


/* =========================================================
   STANDINGS
   ========================================================= */

function renderStandings() {

    if (!standingsTable) return;

    standingsTable.innerHTML = `
        <div class="table-wrapper">

            <table>

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Team</th>
                        <th>P</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>Pts</th>
                    </tr>
                </thead>

                <tbody>

                    ${standings.map(team => `
                        <tr>

                            <td>
                                ${escapeHtml(team.position)}
                            </td>

                            <td class="table-team">

                                <span class="team-code small">
                                    ${escapeHtml(team.code)}
                                </span>

                                <strong>
                                    ${escapeHtml(team.team)}
                                </strong>

                            </td>

                            <td>${escapeHtml(team.played)}</td>
                            <td>${escapeHtml(team.wins)}</td>
                            <td>${escapeHtml(team.draws)}</td>
                            <td>${escapeHtml(team.losses)}</td>

                            <td>
                                <strong>${escapeHtml(team.points)}</strong>
                            </td>

                        </tr>
                    `).join("")}

                </tbody>

            </table>

        </div>
    `;
}


/* =========================================================
   TOP SCORERS
   ========================================================= */

function renderScorers() {

    if (!scorersContainer) return;

    scorersContainer.innerHTML = scorers.map((player, index) => {

        return `
            <div class="scorer-row">

                <span class="scorer-position">
                    ${index + 1}
                </span>

                <span class="scorer-avatar">
                    ${escapeHtml(player.emoji)}
                </span>

                <div class="scorer-info">

                    <strong>
                        ${escapeHtml(player.name)}
                    </strong>

                    <span>
                        ${escapeHtml(player.club)}
                    </span>

                </div>

                <strong class="scorer-goals">
                    ${escapeHtml(player.goals)}
                </strong>

            </div>
        `;

    }).join("");
}


/* =========================================================
   NEWS
   ========================================================= */

function renderNews() {

    if (!newsContainer) return;

    newsContainer.innerHTML = news.map(item => {

        return `
            <article class="news-card">

                <div class="news-image">
                    ${escapeHtml(item.emoji)}
                </div>

                <div class="news-content">

                    <div class="news-meta">
                        <span>${escapeHtml(item.category)}</span>
                        <span>${escapeHtml(item.date)}</span>
                    </div>

                    <h3>
                        ${escapeHtml(item.title)}
                    </h3>

                    <p>
                        ${escapeHtml(item.description)}
                    </p>

                </div>

            </article>
        `;

    }).join("");
}


/* =========================================================
   SEARCH
   ========================================================= */

function performSearch(query) {

    if (!searchResults) return;

    const term = query.trim().toLowerCase();

    if (!term) {
        searchResults.innerHTML = `
            <div class="search-placeholder">
                <p>Search for a player, team or league.</p>
            </div>
        `;
        return;
    }

    const playerResults = players.filter(player =>
        player.name.toLowerCase().includes(term) ||
        player.club.toLowerCase().includes(term) ||
        player.position.toLowerCase().includes(term)
    );

    const teamResults = teams.filter(team =>
        team.name.toLowerCase().includes(term) ||
        team.league.toLowerCase().includes(term) ||
        team.code.toLowerCase().includes(term)
    );

    const leagueResults = leagues.filter(league =>
        league.toLowerCase().includes(term)
    );

    const totalResults =
        playerResults.length +
        teamResults.length +
        leagueResults.length;

    if (totalResults === 0) {

        searchResults.innerHTML = `
            <div class="search-placeholder">
                <p>
                    No results found for
                    "<strong>${escapeHtml(query)}</strong>".
                </p>
            </div>
        `;

        return;
    }

    let html = "";

    /* Players */

    if (playerResults.length > 0) {

        html += `
            <div class="search-group">

                <h3>Players</h3>

                <div class="search-items">

                    ${playerResults.map(player => `
                        <div class="search-result-item">

                            <span class="search-icon">
                                ${escapeHtml(player.emoji)}
                            </span>

                            <div>
                                <strong>
                                    ${escapeHtml(player.name)}
                                </strong>

                                <span>
                                    Player · ${escapeHtml(player.club)}
                                </span>
                            </div>

                        </div>
                    `).join("")}

                </div>

            </div>
        `;
    }


    /* Teams */

    if (teamResults.length > 0) {

        html += `
            <div class="search-group">

                <h3>Teams</h3>

                <div class="search-items">

                    ${teamResults.map(team => `
                        <div class="search-result-item">

                            <span class="search-icon">
                                ⚽
                            </span>

                            <div>
                                <strong>
                                    ${escapeHtml(team.name)}
                                </strong>

                                <span>
                                    Team · ${escapeHtml(team.league)}
                                </span>
                            </div>

                        </div>
                    `).join("")}

                </div>

            </div>
        `;
    }


    /* Leagues */

    if (leagueResults.length > 0) {

        html += `
            <div class="search-group">

                <h3>Leagues</h3>

                <div class="search-items">

                    ${leagueResults.map(league => `
                        <div class="search-result-item">

                            <span class="search-icon">
                                🏆
                            </span>

                            <div>
                                <strong>
                                    ${escapeHtml(league)}
                                </strong>

                                <span>
                                    Football competition
                                </span>
                            </div>

                        </div>
                    `).join("")}

                </div>

            </div>
        `;
    }


    searchResults.innerHTML = html;
}


/* =========================================================
   MATCH FILTERS
   ========================================================= */

function setupMatchFilters() {

    const filterButtons =
        document.querySelectorAll("[data-match-filter]");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const filter =
                button.getAttribute("data-match-filter");

            renderMatches(filter);
        });

    });
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

    if (!mobileMenuBtn) return;

    const nav =
        document.querySelector(".main-nav");

    if (!nav) return;

    mobileMenuBtn.addEventListener("click", () => {

        const isOpen =
            nav.classList.toggle("open");

        mobileMenuBtn.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });


    /* Close menu after selecting a link */

    const navLinks =
        nav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            mobileMenuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================================
   THEME SYSTEM
   ========================================================= */

const THEME_KEY = "ultimate-football-theme";


function applyTheme(theme) {

    document.documentElement.setAttribute(
        "data-theme",
        theme
    );

    if (!themeToggle) return;

    if (theme === "dark") {

        themeToggle.textContent = "☀️";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to light mode"
        );

    } else {

        themeToggle.textContent = "🌙";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to dark mode"
        );
    }
}


function getInitialTheme() {

    const savedTheme =
        localStorage.getItem(THEME_KEY);

    if (savedTheme === "dark" ||
        savedTheme === "light") {

        return savedTheme;
    }

    const prefersDark =
        window.matchMedia &&
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

    return prefersDark ? "dark" : "light";
}


function setupTheme() {

    const initialTheme =
        getInitialTheme();

    applyTheme(initialTheme);

    if (!themeToggle) return;

    themeToggle.addEventListener("click", () => {

        const currentTheme =
            document.documentElement.getAttribute(
                "data-theme"
            ) || "light";

        const newTheme =
            currentTheme === "dark"
                ? "light"
                : "dark";

        applyTheme(newTheme);

        localStorage.setItem(
            THEME_KEY,
            newTheme
        );

    });

}


/* =========================================================
   SMOOTH NAVIGATION
   ========================================================= */

function setupSmoothNavigation() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    links.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (!targetId ||
                targetId === "#") {
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
   ACTIVE NAVIGATION / SCROLL SPY
   ========================================================= */

function setupScrollSpy() {

    const sections =
        document.querySelectorAll("main section[id]");

    const navLinks =
        document.querySelectorAll(
            '.main-nav a[href^="#"]'
        );

    if (!sections.length ||
        !navLinks.length) {
        return;
    }

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    const id =
                        entry.target.getAttribute("id");

                    navLinks.forEach(link => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            `#${id}`
                        ) {
                            link.classList.add("active");
                        }

                    });

                });

            },
            {
                threshold: 0.25
            }
        );

    sections.forEach(section => {
        observer.observe(section);
    });

}


/* =========================================================
   HERO FEATURED MATCH
   ========================================================= */

function updateFeaturedMatch() {

    const featuredMatches =
        document.getElementById(
            "featuredMatches"
        );

    if (!featuredMatches) return;

    const featured = matches[0];

    featuredMatches.innerHTML = `
        <div class="featured-match">

            <div class="featured-label">
                FEATURED MATCH · DEMO
            </div>

            <div class="featured-league">
                ${escapeHtml(featured.league)}
            </div>

            <div class="featured-teams">

                <div>
                    <span class="featured-code">
                        ${escapeHtml(featured.homeCode)}
                    </span>

                    <strong>
                        ${escapeHtml(featured.home)}
                    </strong>
                </div>

                <div class="featured-score">
                    ${escapeHtml(featured.homeScore)}
                    -
                    ${escapeHtml(featured.awayScore)}
                </div>

                <div>
                    <span class="featured-code">
                        ${escapeHtml(featured.awayCode)}
                    </span>

                    <strong>
                        ${escapeHtml(featured.away)}
                    </strong>
                </div>

            </div>

            <div class="featured-status">
                ${escapeHtml(featured.time)}
            </div>

        </div>
    `;
}


/* =========================================================
   DATA STATUS
   ========================================================= */

function updateDataStatus() {

    const status =
        document.getElementById("dataStatus");

    if (!status) return;

    status.textContent =
        DEMO_MODE
            ? "Demo Mode"
            : "Live Data";
}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

function updateYear() {

    if (!currentYear) return;

    currentYear.textContent =
        new Date().getFullYear();
}


/* =========================================================
   SEARCH EVENT
   ========================================================= */

function setupSearch() {

    if (!searchInput) return;

    searchInput.addEventListener(
        "input",
        event => {
            performSearch(event.target.value);
        }
    );

}


/* =========================================================
   INITIALISE WEBSITE
   ========================================================= */

function initUltimateFootball() {

    setupTheme();

    renderMatches();

    renderPlayers();

    renderTeams();

    renderStandings();

    renderScorers();

    renderNews();

    updateFeaturedMatch();

    updateDataStatus();

    updateYear();

    setupMatchFilters();

    setupMobileMenu();

    setupSmoothNavigation();

    setupScrollSpy();

    setupSearch();

}


/* =========================================================
   START WEBSITE
   ========================================================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initUltimateFootball
    );

} else {

    initUltimateFootball();

}
