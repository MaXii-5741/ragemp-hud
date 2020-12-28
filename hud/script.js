let dateBrowser = mp.browsers.new('package://hud/web/hud/index.html')
let showed = false;

mp.events.add('render', () => {
    showed = true;

    let health = mp.players.local.getHealth();
    let armour = mp.players.local.getArmour();

    dateBrowser.execute(`update(${health}, ${armour});`);
})