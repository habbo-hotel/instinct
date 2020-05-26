export interface Weapon {
  id: number;
  name: string;
  desc: string;
  swfName: string;
  maxDamage: number;
  minDamage: number;
  range: number;
  spread: number;
  price: number;
  reloadTime: number;
  minEnergy: number;
  minStrength: number;
  totalStock: number;
}

export const exampleWeapon: Weapon = {
  id: 1,
  name: 'M16',
  desc: 'The M16 is an Assault Rifle',
  swfName: 'm16',
  maxDamage: 20,
  minDamage: 12,
  range: 5,
  spread: 2,
  price: 2000,
  reloadTime: 5,
  minEnergy: 2,
  minStrength: 2,
  totalStock: 100,
}