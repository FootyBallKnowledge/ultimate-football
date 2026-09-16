"use strict";

/* =========================================================
   ULTIMATE FOOTBALL
   Demo Data Version
   No API key required
   ========================================================= */

const DEMO_MODE = true;


/* =========================================================
   DEMO MATCHES
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
   PLAYERS
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
    }
];


/* =========================================================
   TEAMS
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
        stadium: "Camp Nou",
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
   STANDINGS
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
   NEWS
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
            "Speed, creativity and versatility are becoming increasingly important qualities.",
        emoji: "⚡"
    },
    {
        category: "LEAGUES",
        date: "Demo",
        title: "Europe's Major Football Leagues",
        description:
            "Follow the Premier League, La Liga, Bundesliga, Serie A and Ligue 1.",
        emoji: "🌍"
    }
];


/* =========================================================
   LEAGUES
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
   SAFE HTML
   ========================================================= */

function safe(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   ELEMENT HELPER
   ========================================================= */

function el(id) {
    return document.getElementById(id);
}


/* =========================================================
   MATCHES
   ========================================================= */

function renderMatches(filter = "all") {

    const container = el("matchesContainer");

    if (!container) return;

    let data = matches;

    if (filter !== "all") {
        data = matches.filter(
            match => match.status === filter
        );
    }

    if (!data.length) {
        container.innerHTML = `
            <div class="empty-state">
                No matches available.
            </div>
        `;
        return;
    }

    container.innerHTML = data.map(match => {

        const score =
            match.status === "upcoming"
                ? match.time
                : `${match.homeScore} - ${match.awayScore}`;

        const statusText =
            match.status === "live"
                ? "LIVE"
                : match.status === "result"
                    ? "FT"
                    : "UPCOMING";

        return `
            <article class="match-card">

                <div class="match-card-top">

                    <span class="match-league">
                        ${safe(match.league)}
                    </span>

                    <span class="match-status ${safe(match.status)}">
                        ${statusText}
                    </span>

                </div>

                <div class="match-teams">

                    <div class="team-side">

                        <div class="team-code">
                            ${safe(match.homeCode)}
                        </div>

                        <strong>
                            ${safe(match.home)}
                        </strong>

                    </div>

                    <div class="match-score">

                        <strong>
                            ${safe(score)}
                        </strong>

                    </div>

                    <div class="team-side">

                        <div class="team-code">
                            ${safe(match.awayCode)}
                        </div>

                        <strong>
                            ${safe(match.away)}
                        </strong>

                    </div>

                </div>

                <div class="match-date">
                    ${safe(match.date)}
                </div>

            </article>
        `;

    }).join("");
}


/* =========================================================
   PLAYERS
   ========================================================= */

function renderPlayers() {

    const container = el("playersContainer");

    if (!container) return;

    container.innerHTML = players.map(player => `
        <article class="player-card">

            <div class="player-image">
                ${safe(player.emoji)}
            </div>

            <div class="player-info">

                <h3>
                    ${safe(player.name)}
                </h3>

                <p class="player-club">
                    ${safe(player.club)}
                </p>

                <span class="player-position">
                    ${safe(player.position)}
                </span>

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

            </div>

        </article>
    `).join("");
}


/* =========================================================
   TEAMS
   ========================================================= */

function renderTeams() {

    const container = el("teamsContainer");

    if (!container) return;

    container.innerHTML = teams.map(team => {

        const form = team.form.map(result => {

            const letter =
                result === "w"
                    ? "W"
                    : result === "d"
                        ? "D"
                        : "L";

            return `
                <span class="form-badge ${result}">
                    ${letter}
                </span>
            `;

        }).join("");

        return `
            <article class="team-card">

                <div class="team-card-header">

                    <div class="team-code large">
                        ${safe(team.code)}
                    </div>

                    <div>
                        <h3>
                            ${safe(team.name)}
                        </h3>

                        <p>
                            ${safe(team.league)}
                        </p>
                    </div>

                </div>

                <div class="team-details">

                    <p>
                        <strong>Stadium:</strong>
                        ${safe(team.stadium)}
                    </p>

                    <p>
                        <strong>Manager:</strong>
                        ${safe(team.manager)}
                    </p>

                </div>

                <div class="team-squad">

                    <h4>Key Players</h4>

                    <ul>
                        ${team.squad.map(player => `
                            <li>${safe(player)}</li>
                        `).join("")}
                    </ul>

                </div>

                <div class="team-form">

                    <h4>Recent Form</h4>

                    <div class="form-list">
                        ${form}
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

    const container = el("standingsTable");

    if (!container) return;

    container.innerHTML = `
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
                                ${team.position}
                            </td>

                            <td class="table-team">

                                <span class="team-code small">
                                    ${safe(team.code)}
                                </span>

                                <strong>
                                    ${safe(team.team)}
                                </strong>

                            </td>

                            <td>${team.played}</td>
                            <td>${team.wins}</td>
                            <td>${team.draws}</td>
                            <td>${team.losses}</td>

                            <td>
                                <strong>
                                    ${team.points}
                                </strong>
                            </td>

                        </tr>
                    `).join("")}

                </tbody>

            </table>

        </div>
    `;
}


/* =========================================================
   SCORERS
   ========================================================= */

function renderScorers() {

    const container = el("scorersContainer");

    if (!container) return;

    container.innerHTML = scorers.map((player, index) => `
        <div class="scorer-row">

            <span class="scorer-position">
                ${index + 1}
            </span>

            <span class="scorer-avatar">
                ${safe(player.emoji)}
            </span>

            <div class="scorer-info">

                <strong>
                    ${safe(player.name)}
                </strong>

                <span>
                    ${safe(player.club)}
                </span>

            </div>

            <strong class="scorer-goals">
                ${player.goals}
            </strong>

        </div>
    `).join("");
}


/* =========================================================
   NEWS
   ========================================================= */

function renderNews() {

    const container = el("newsContainer");

    if (!container) return;

    container.innerHTML = news.map(item => `
        <article class="news-card">

            <div class="news-image">
                ${safe(item.emoji)}
            </div>

            <div class="news-content">

                <div class="news-meta">

                    <span>
                        ${safe(item.category)}
                    </span>

                    <span>
                        ${safe(item.date)}
                    </span>

                </div>

                <h3>
                    ${safe(item.title)}
                </h3>

                <p>
                    ${safe(item.description)}
                </p>

            </div>

        </article>
    `).join("");
}


/* =========================================================
   FEATURED MATCH
   ========================================================= */

function renderFeaturedMatch() {

    const container = el("featuredMatches");

    if (!container) return;

    const match = matches[0];

    container.innerHTML = `
        <div class="featured-match">

            <div class="featured-label">
                FEATURED MATCH · DEMO
            </div>

            <div class="featured-league">
                ${safe(match.league)}
            </div>

            <div class="featured-teams">

                <div>
                    <span class="featured-code">
                        ${safe(match.homeCode)}
                    </span>

                    <strong>
                        ${safe(match.home)}
                    </strong>
                </div>

                <div class="featured-score">
                    ${match.homeScore}
                    -
                    ${match.awayScore}
                </div>

                <div>
                    <span class="featured-code">
                        ${safe(match.awayCode)}
                    </span>

                    <strong>
                        ${safe(match.away)}
                    </strong>
                </div>

            </div>

            <div class="featured-status">
                ${safe(match.time)}
            </div>

        </div>
    `;
}


/* =========================================================
   MATCH FILTER BUTTONS
   ========================================================= */

function setupFilters() {

    const buttons =
        document.querySelectorAll(
            "[data-match-filter]"
        );

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            renderMatches(
                button.dataset.matchFilter
            );

        });

    });
}


/* =========================================================
   SEARCH
   ========================================================= */

function setupSearch() {

    const input = el("searchInput");
    const results = el("searchResults");

    if (!input || !results) return;

    input.addEventListener("input", () => {

        const query =
            input.value.trim().toLowerCase();

        if (!query) {

            results.innerHTML = `
                <div class="search-placeholder">
                    <p>
                        Search for a player, team or league.
                    </p>
                </div>
            `;

            return;
        }

        const foundPlayers =
            players.filter(player =>
                player.name.toLowerCase().includes(query) ||
                player.club.toLowerCase().includes(query)
            );

        const foundTeams =
            teams.filter(team =>
                team.name.toLowerCase().includes(query) ||
                team.league.toLowerCase().includes(query)
            );

        const foundLeagues =
            leagues.filter(league =>
                league.toLowerCase().includes(query)
            );

        let html = "";

        if (foundPlayers.length) {

            html += `
                <div class="search-group">

                    <h3>Players</h3>

                    ${foundPlayers.map(player => `
                        <div class="search-result-item">

                            <span class="search-icon">
                                ${safe(player.emoji)}
                            </span>

                            <div>
                                <strong>
                                    ${safe(player.name)}
                                </strong>

                                <span>
                                    Player · ${safe(player.club)}
                                </span>
                            </div>

                        </div>
                    `).join("")}

                </div>
            `;
        }

        if (foundTeams.length) {

            html += `
                <div class="search-group">

                    <h3>Teams</h3>

                    ${foundTeams.map(team => `
                        <div class="search-result-item">

                            <span class="search-icon">
                                ⚽
                            </span>

                            <div>
                                <strong>
                                    ${safe(team.name)}
                                </strong>

                                <span>
                                    Team · ${safe(team.league)}
                                </span>
                            </div>

                        </div>
                    `).join("")}

                </div>
            `;
        }

        if (foundLeagues.length) {

            html += `
                <div class="search-group">

                    <h3>Leagues</h3>

                    ${foundLeagues.map(league => `
                        <div class="search-result-item">

                            <span class="search-icon">
                                🏆
                            </span>

                            <div>
                                <strong>
                                    ${safe(league)}
                                </strong>

                                <span>
                                    Football competition
                                </span>
                            </div>

                        </div>
                    `).join("")}

                </div>
            `;
        }

        if (!html) {

            html = `
                <div class="search-placeholder">
                    <p>
                        No results found for
                        "<strong>${safe(input.value)}</strong>".
                    </p>
                </div>
            `;
        }

        results.innerHTML = html;

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

        const opened =
            nav.classList.toggle("open");

        button.setAttribute(
            "aria-expanded",
            opened ? "true" : "false"
        );

    });

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            button.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });
}


/* =========================================================
   THEME
   ========================================================= */

function setupTheme() {

    const button = el("themeToggle");

    if (!button) return;

    const storageKey =
        "ultimate-football-theme";

    const saved =
        localStorage.getItem(storageKey);

    const systemDark =
        window.matchMedia &&
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

    let theme =
        saved ||
        (systemDark ? "dark" : "light");

    applyTheme(theme);

    button.addEventListener("click", () => {

        theme =
            theme === "dark"
                ? "light"
                : "dark";

        applyTheme(theme);

        localStorage.setItem(
            storageKey,
            theme
        );

    });

}


function applyTheme(theme) {

    document.documentElement.dataset.theme =
        theme;

    const button = el("themeToggle");

    if (!button) return;

    if (theme === "dark") {

        button.textContent = "☀️";

        button.title =
            "Switch to light mode";

        button.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    } else {

        button.textContent = "🌙";

        button.title =
            "Switch to dark mode";

        button.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

    }
}


/* =========================================================
   YEAR
   ========================================================= */

function setupYear() {

    const year = el("currentYear");

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }
}


/* =========================================================
   SMOOTH SCROLL
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
   DATA STATUS
   ========================================================= */

function setupDataStatus() {

    const status =
        el("dataStatus");

    if (status) {
        status.textContent =
            DEMO_MODE
                ? "Demo Mode"
                : "Live Data";
    }
}


/* =========================================================
   START EVERYTHING
   ========================================================= */

function init() {

    renderMatches();

    renderPlayers();

    renderTeams();

    renderStandings();

    renderScorers();

    renderNews();

    renderFeaturedMatch();

    setupFilters();

    setupSearch();

    setupMobileMenu();

    setupTheme();

    setupYear();

    setupSmoothScroll();

    setupDataStatus();

}


/* =========================================================
   RUN
   ========================================================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        init
    );

} else {

    init();

}
