interface Data {
  names: string[];
  sites: string[];
  locations: string[];
  persecution: { known: boolean; evidences: string[] };
  sources: string[];
  checked: boolean;
}

const getList = async () =>
  (await (
    await fetch(
      'https://raw.githubusercontent.com/FunctionSir/TransDefenseProject/master/institute_list.json',
    )
  ).json()) as Data[];

export default getList;
