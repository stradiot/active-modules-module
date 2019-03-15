const activeModules = [];

function add({ moduleId, available, info }) {
    activeModules[moduleId] = {
      available: data.available,
      info: data.moduleInfo
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
