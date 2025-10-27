import { ItemInterFace, itemType } from "../module/interface";

export class Animals implements ItemInterFace {
  /** 動物のデータ
   * name 動物の名前
   * strong 強さの数値
   */
  public animalData: Array<itemType> = [
    { name: "バハムート", strong: 300 },
    { name: "ライオン", strong: 3 },
    { name: "シマウマ", strong: 2 },
    { name: "うさぎ", strong: 1 },
    { name: "ねずみ", strong: 0 },
  ];

  private selectedAnimal1: itemType = this.animalData[0];
  private selectedAnimal2: itemType = this.animalData[0];

  // アイテムを設定
  public set = (name: string) => {
    const animal = this.animalData.find(animal => animal.name === name);
    if (animal) {
      if (!this.selectedAnimal1) {
        this.selectedAnimal1 = animal;
      } else {
        this.selectedAnimal2 = animal;
      }
    }
  };

  // どっちの値も入っているならバトル結果をかえす
  public battle = (): string => {
    if (this.selectedAnimal1 && this.selectedAnimal2) {
      if (this.selectedAnimal1.strong > this.selectedAnimal2.strong) {
        window.console.log(this.selectedAnimal1);
        window.console.log(this.selectedAnimal2);
        return `${this.selectedAnimal1.name} の勝ち！`;
      } else if (this.selectedAnimal1.strong < this.selectedAnimal2.strong) {
        window.console.log(this.selectedAnimal1);
        window.console.log(this.selectedAnimal2);
        return `${this.selectedAnimal2.name} の勝ち！`;
      } else {
        return "引き分け！";
      }
    }
    window.console.log(this.selectedAnimal1);
    window.console.log(this.selectedAnimal2);
    return "両方の動物を選択してください。";
  };

  // 現在の選択を削除
  public destroy = () => {
    this.selectedAnimal1 = this.animalData[0];
    this.selectedAnimal2 = this.animalData[0];
  };

  // アイテムデータを取得
  public getAnimalData = (): Array<itemType> => {
    return this.animalData;
  };
}
