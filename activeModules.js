const activeModules = [];

function add({ moduleId, available, moduleInfo }) {
    activeModules[moduleId] = {
      available,
      info: moduleInfo
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
