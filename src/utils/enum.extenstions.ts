import LookupDataInterface from "@/stores/common/lookup.data.interface";

const EnumExtenstions = {
  toArray<T extends Record<string, string>>(enumObj: T): LookupDataInterface[] {
    return Object.values(enumObj).map((value) => ({ id: value, name: value }));
  },
};

export default EnumExtenstions;
