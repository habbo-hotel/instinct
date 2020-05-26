import {WeaponEntity} from './weapon.entity';
import {Weapon} from 'instinct-rp-interfaces';

export function weaponWire(weaponEntity: WeaponEntity): Weapon {
  return {
    id: weaponEntity.id!,
    name: weaponEntity.displayName,
    desc: weaponEntity.desc,
    effectID: weaponEntity.effectID,
    minDamage: weaponEntity.minDamage,
    maxDamage: weaponEntity.maxDamage,
    spread: weaponEntity.spread,
    range: weaponEntity.range,
    price: weaponEntity.price,
    reloadTime: weaponEntity.reloadTime,
    minEnergy: weaponEntity.minEnergy,
    minStrength: weaponEntity.minStrength,
    totalStock: weaponEntity.totalStock,
  };
}
