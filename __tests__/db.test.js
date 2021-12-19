// *********   Test for findById funtion    *******
const findById = require('../lib/notes.js');


jest.mock('fs')


test("finds by id", () => {
  const startingNotes = [
    {
      title: "First Notes Test",
      text: "test 1",
      id: "1"
    },
    {
      title: "Second Notes Test",
      text: "test 2",
      id: "2"
    },
  ];

  const result = findById("2", startingNotes);

  expect(result.title).toBe("Second Notes Test");
});

