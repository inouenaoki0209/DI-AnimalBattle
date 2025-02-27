import React, { useState } from "react";
import { Select, Button, VStack, HStack, Box } from "@chakra-ui/react";
import { Fish } from "./fish";
import { Animals } from "./Animals";
import { MainClass } from "./mainClass";
export type selectType = "Animals" | "Fish";

export const AnimalFishBattle: React.FC = () => {
  const [mainClass, setMainClass] = useState<MainClass | null>(null);
  const [result, setResult] = useState("");
  const [selectedItem1, setSelectedItem1] = useState<string | undefined>("");
  const [selectedItem2, setSelectedItem2] = useState<string | undefined>("");

  const handleSelectClass = (type: selectType) => {
    if (type === "Animals") {
      // 押されたほうのボタンに応じてクラスをインスタンス化
      setMainClass(new MainClass(new Animals()));
    } else if (type === "Fish") {
      setMainClass(new MainClass(new Fish()));
    }
  };

  const handleSet1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem1(event.target.value);
    if (mainClass) {
      mainClass.setItem(event.target.value);
    }
  };

  const handleSet2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem2(event.target.value);
    if (mainClass) {
      mainClass.setItem(event.target.value);
    }
  };

  const handleBattle = () => {
    if (mainClass) {
      setResult(mainClass.battle());
    } else {
      setResult("動物か魚を選択してください");
    }
  };

  const handleReset = () => {
    if (mainClass) {
      mainClass.destroy();
    }
    // プルダウンを初期状態に戻している
    setSelectedItem1('選択1');
    setSelectedItem2('選択2');
    setResult("");
  };

  return (
    <VStack spacing={4}>
      <HStack spacing={4}>
        <Button
          onClick={() => handleSelectClass("Animals")}
          colorScheme="teal"
        >
          動物
        </Button>
        <Button
          onClick={() => handleSelectClass("Fish")}
          colorScheme="blue"
        >
          魚
        </Button>
      </HStack>
      {mainClass && (
        <HStack spacing={4}>
          <Select
            placeholder="選択1"
            value={selectedItem1}
            onChange={handleSet1}
          >
            {mainClass.getAnimalData().map((animal) => (
              <option key={animal.name} value={animal.name}>
                {animal.name}
              </option>
            ))}
          </Select>
          <Box>vs</Box>
          <Select
            placeholder="選択2"
            value={selectedItem2}
            onChange={handleSet2}
          >
            {mainClass.getAnimalData().map((animal) => (
              <option key={animal.name} value={animal.name}>
                {animal.name}
              </option>
            ))}
          </Select>
        </HStack>
      )}
      <Button onClick={handleBattle} colorScheme="red">
        Battle!
      </Button>
      <Button onClick={handleReset} colorScheme="gray">
        Reset
      </Button>
      <Box>{result}</Box>
    </VStack>
  );
};
