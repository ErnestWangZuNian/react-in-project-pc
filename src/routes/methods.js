//  自动继承路径
const autoUpdatePath = (menus, parent) => {
  let result = [].concat(menus);
  if (menus && menus.length) {
    result = menus.map((item) => {
      const newItem = { ...item };
      newItem.path = parent ? `${parent.path}${newItem.path}` : newItem.path;
      newItem.parent = parent || null;
      if (newItem.children && newItem.children.length) {
        newItem.children = autoUpdatePath(newItem.children, newItem);
      }
      return newItem;
    });
  }
  return result;
};

// 自动填充parent
const autoFillParent = (menus, parent) => {
  let result = [].concat(menus);
  if (menus && menus.length) {
    result = menus.map((item) => {
      const newItem = { ...item };
      newItem.parent = parent || null;
      if (newItem.children && newItem.children.length) {
        newItem.children = autoUpdatePath(newItem.children, newItem);
      }
      return newItem;
    });
  }
  return result;
};

//  根据某个path遍历出他自己的信息
const findIteminfoByPath = (menus, path) => {
  let result = null;
  const newMenus = autoFillParent(menus);
  if (newMenus && newMenus.length) {
    menus.forEach((item) => {
      if (item.path === path) {
        result = item;
      } else if (item.children && item.children.length) {
        result = findIteminfoByPath(item.children, path);
      }
    });
  }
  return result;
};

//  根据某个path遍历出她所有的父级元素
const findParentsByPath = (menus, path) => {
  const currentItem = findIteminfoByPath(menus, path);
  const getParents = (item, parents) => {
    let newParents = parents ? [].concat(parents) : [];
    if (item && item.parent) {
      newParents.push(item.parent);
      newParents = getParents(item.parent, newParents);
    }
    return newParents;
  };
  return getParents(currentItem);
};
export default {
  autoUpdatePath,
  autoFillParent,
  findIteminfoByPath,
  findParentsByPath,
};
