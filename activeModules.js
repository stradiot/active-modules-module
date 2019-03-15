const activeModules = [];

function add({ moduleId, available, info }) {
    activeModules[moduleId] = {
      available: available,
      info: info
    };
};

function remove(moduleId) {
    delete activeModules[moduleId];
};

function update(moduleId, available) {
    activeModules[moduleId].available = available;
};

module.exports = {
    activeModules,
    add,
    update,
    remove
}
