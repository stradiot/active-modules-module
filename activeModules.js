const activeModules = {};

function add({ moduleId, available, info, type }) {
    activeModules[moduleId] = {
      available,
      info,
      type
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
