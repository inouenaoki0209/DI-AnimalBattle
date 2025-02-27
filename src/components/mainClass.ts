import { ItemInterFace, itemType } from "../module/interface";

export class MainClass {
  private itemService: ItemInterFace;

  constructor(itemService: ItemInterFace) {
    this.itemService = itemService;
  }

  public setItem(name: string) {
    this.itemService.set(name);
  }

  // バトル処理
  public battle(): string {
    return this.itemService.battle();
  }

  // 現在の対戦情報を削除
  public destroy() {
    this.itemService.destroy();
  }

  // アイテムデータを取得する
  public getAnimalData(): itemType[] {
    return this.itemService.getAnimalData();
  }
}
