const mongoClient = require('../mongoConnect');
const _client = mongoClient.connect();

const mongoDB = {
  setData: async () => {
    const client = await _client;
    // collection이 없으면 알아서 생성
    const db = client.db('mbti').collection('data');
    // redux의 데이터를 그대로 mongodb에 삽입
    const result = await db.insertOne(initState);
    if (result.acknowledged) {
      return '업데이트 성공';
    } else {
      throw new Error('통신 이상');
    }
  },
};
module.exports = mongoDB;
