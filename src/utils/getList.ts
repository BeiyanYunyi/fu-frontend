type Row = [string, string, string, string, string, string, string, string];

const getList = async () => {
  const txt = await (
    await fetch(
      'https://raw.githubusercontent.com/FunctionSir/TransDefenseProject/master/%E6%88%92%E7%BD%91%E7%98%BE(%E5%8F%AF%E8%83%BD%E5%90%AB%E6%89%AD%E8%BD%AC%E6%B2%BB%E7%96%97)%E6%9C%BA%E6%9E%84%E5%88%97%E8%A1%A8.csv',
    )
  ).text();
  const table: Row[] = txt
    .split('\n')
    .map((e) => e.split(',') as Row)
    .slice(1);
  table.pop();
  const data = table.map((row) => ({
    id: row[0],
    name: row[1],
    website: row[2],
    location: row[3],
    source: row[4],
    persecutingTrans: row[5] === 'TRUE',
    proof: row[6],
    factChecking: row[7] === 'TRUE',
  }));
  return data;
};

export default getList;
