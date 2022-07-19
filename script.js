navigator.getBattery().then((battery) => {
    const presentBattery = document.querySelector(".presentBattery");
    const precent = document.querySelector(".precent");
    const paragraph = document.querySelector(".paragraph");

    function updateAllBatteryInfo() {
        updateLevelInfo();
        updateChargingInfo();
    }

    updateAllBatteryInfo();

    function updateLevelInfo() {
        presentBattery.style.width = battery.level * 100 + '%';
        precent.innerHTML = battery.level * 100 + '%'
    }

    function updateChargingInfo() {
        paragraph.innerHTML = battery.charging ? "Your device charging" : "Your device not charging";
    }

    battery.addEventListener("levelchange", (() => {
        updateLevelInfo();
    }));

    battery.addEventListener("chargingchange", (() => {
        updateChargingInfo();
    }));

});