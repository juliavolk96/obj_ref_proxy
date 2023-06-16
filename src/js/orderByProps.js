export function orderByProps(obj, order) {
  const orderedProps = [];
  const remainingProps = [];

  /* eslint-disable no-restricted-syntax */
  /* eslint-disable guard-for-in */
  for (const prop in obj) {
    if (order.includes(prop)) {
      orderedProps.push({ key: prop, value: obj[prop] });
    } else {
      remainingProps.push(prop);
    }
  }

  remainingProps.sort();

  /* eslint-disable no-restricted-syntax */
  for (const prop of remainingProps) {
    orderedProps.push({ key: prop, value: obj[prop] });
  }

  return orderedProps;
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
