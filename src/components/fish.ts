import { ItemInterFace, itemType } from "../module/interface";

export class Fish implements ItemInterFace {
  /** さかなのデータ
   * name さかなの名前
   * strong 強さの数値
   */
  public fishData: Array<itemType> = [
    { name: "エンタープライズ", strong: 300 },
    { name: "さめ", strong: 3 },
    { name: "まぐろ", strong: 2 },
    { name: "さけ", strong: 1 },
    { name: "しらす", strong: 0 },
  ];

  private selectedFish1: itemType | null = null;
  private selectedFish2: itemType | null = null;

  // アイテムを設定
  public set = (name: string) => {
    // 選択１や選択２が選ばれてた際にはnullを入れる
    const fish = this.fishData.find(fishItem => fishItem.name === name);
    if (!this.selectedFish1) {
      this.selectedFish1 = fish || null;
    } else {
      this.selectedFish2 = fish || null;
    }
  };

  // バトル結果を返す
  public battle = (): string => {
    if (this.selectedFish1 && this.selectedFish2) {
      if (this.selectedFish1.strong > this.selectedFish2.strong) {
        return `${this.selectedFish1.name} の勝ち！`;
      } else if (this.selectedFish1.strong < this.selectedFish2.strong) {
        return `${this.selectedFish2.name} の勝ち！`;
      } else {
        return "引き分け！";
      }
    }
    return "両方の魚を選択してください!";
  };

  // 現在の選択を削除
  public destroy = () => {
    this.selectedFish1 = null;
    this.selectedFish2 = null;
  };

  // アイテムデータを取得
  public getAnimalData = (): Array<itemType> => {
    return this.fishData;
  };
}
