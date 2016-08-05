export const directories = [
  ['tree', 'directories'],
  (directories) => directories.toJS()
];

export const value = [
  ['tree','search'],
  (search) => search.get('value')
];

export const data = [
  ['tree', 'directories'],
  ['tree', 'search', 'value'],

  (directories, value) => {
    let children;
    let matches = [];

    const iteratee = (item) => {
      if (!value) {
        matches = directories.toJS();
        return;
      }

      if (item.get('name').indexOf(value) > -1) {
        matches.push(item.toJS());
        return;
      }

      children = item.get('children');

      if (children && children.size) {
        children.map(iteratee);
      }
    };

    directories.map(iteratee);

    return {
      value: value,
      directories: matches
    };
  }
];
