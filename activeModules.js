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

module.exports = {
    activeModules;
    add,
    remove
}
