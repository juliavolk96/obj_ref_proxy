export function orderByProps(obj, order) {
  const props = Object.keys(obj).sort((a, b) => {
    if (order.includes(a) && order.includes(b)) {
      return order.indexOf(a) - order.indexOf(b);
    } if (order.includes(a)) {
      return -1;
    } if (order.includes(b)) {
      return 1;
    }
    return a.localeCompare(b);
  });

  return props.map((prop) => ({ key: prop, value: obj[prop] }));
}

export function extractSpecialAttacks({ special }) {
  return special.map(({
    id, name, description = 'Описание недоступно', icon,
  }) => ({
    id,
    name,
    description,
    icon,
  }));
}
