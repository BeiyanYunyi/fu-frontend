interface Content {
  names: string[];
  sites: string[];
  locations: string[];
  persecution: { known: boolean; evidences: string[] };
  sources: string[];
  checked: boolean;
}

interface Data {
  $schema: string;
  content: Content[];
}

const getList = async () =>
  (
    (await (
      await fetch(
        'https://raw.githubusercontent.com/FunctionSir/TransDefenseProject/master/institute_list.json',
      )
    ).json()) as Data
  ).content;

export default getList;
