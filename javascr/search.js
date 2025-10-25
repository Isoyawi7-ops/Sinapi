const keywordMap = [
    { keyword: "home", url: "./Sinapi.html" },
    { keyword: "about", url: "./About.html" },
    { keyword: "management", url: "./Coorperate_Meet our Management.html" },
    { keyword: "clients", url: "./Coorperate_Our Clients.html" },
    { keyword: "service", url: "./Service.html" },
    { keyword: "news", url: "./News and Media.html" },
    { keyword: "media", url: "./News and Media.html" },
    { keyword: "contact", url: "./Contacts.html" },

    // Directors and keywords
    { keyword: "minnie", url: "./Coorperate_Meet our Management.html" },
    { keyword: "minnie kalo voi", url: "./Coorperate_Meet our Management.html" },
    { keyword: "voi", url: "./Contacts.html" },
    { keyword: "kalo", url: "./Coorperate_Meet our Management.html" },
    { keyword: "ceo", url: "./Coorperate_Meet our Management.html" },
    { keyword: "leata", url: "./Coorperate_Meet our Management.html" },
    { keyword: "leata voi", url: "./Coorperate_Meet our Management.html" },
    { keyword: "director", url: "./Coorperate_Meet our Management.html" }
];

document.getElementById("searchBtn").addEventListener("click", () => {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();
    const resultsBox = document.getElementById("searchResults");

    resultsBox.innerHTML = "";
    resultsBox.style.display = "none";

    if (!input) {
        alert("Please type a search keyword.");
        return;
    }

    const matches = keywordMap.filter(item => item.keyword.includes(input));
    const seenUrls = new Set();

    if (matches.length > 0) {
        resultsBox.style.display = "block";
        resultsBox.innerHTML = "<strong>Search Results:</strong><br>";

        matches.forEach(match => {
            if (!seenUrls.has(match.url)) {
                seenUrls.add(match.url);
                const link = document.createElement("a");
                link.href = match.url;
                link.textContent = match.keyword + " ➜";
                resultsBox.appendChild(link);
                resultsBox.appendChild(document.createElement("br"));
            }
        });
    } else {
        resultsBox.style.display = "block";
        resultsBox.textContent = "No results found.";
    }

    document.getElementById("searchInput").addEventListener("input", () => {
    const resultsBox = document.getElementById("searchResults");
    const value = document.getElementById("searchInput").value.trim();
    if (!value) {
        resultsBox.style.display = "none";
    }
});

});

function handleSearch(inputId, resultsId) {
    const input = document.getElementById(inputId).value.toLowerCase().trim();
    const resultsBox = document.getElementById(resultsId);

    resultsBox.innerHTML = "";
    resultsBox.style.display = "none";

    if (!input) {
        alert("Please type a search keyword.");
        return;
    }

    const matches = keywordMap.filter(item => item.keyword.includes(input));
    const seenUrls = new Set();

    if (matches.length > 0) {
        resultsBox.style.display = "block";
        resultsBox.innerHTML = "<strong>Search Results:</strong><br>";

        matches.forEach(match => {
            if (!seenUrls.has(match.url)) {
                seenUrls.add(match.url);
                const link = document.createElement("a");
                link.href = match.url;
                link.textContent = match.keyword + " ➜";
                resultsBox.appendChild(link);
                resultsBox.appendChild(document.createElement("br"));
            }
        });
    } else {
        resultsBox.style.display = "block";
        resultsBox.textContent = "No results found.";
    }
}

//* Desktop search
//document.getElementById("searchBtn").addEventListener("click", () => {
   // handleSearch("searchInput", "searchResults");
//});
//document.getElementById("searchInput").addEventListener("input", () => {
    //const value = document.getElementById("searchInput").value.trim();
    //document.getElementById("searchResults").style.display = value ? "block" : "none";
//});

// Mobile search
document.getElementById("searchBtnMobile").addEventListener("click", () => {
    handleSearch("searchInputMobile", "searchResultsMobile");
});
//document.getElementById("searchInputMobile").addEventListener("input", () => {
   // const value = document.getElementById("searchInputMobile").value.trim();
   // document.getElementById("searchResultsMobile").style.display = value ? "block" : "none";
//});

