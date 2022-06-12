import {editComment, getDataByImageId, removeComment} from '../AppHelpers';

const images: any = [
  {
    id: '52138522411',
    title: 'HOLLAND @  One of the 7  Tourist Spot I. Visited in Europe',
    imageUrl:
      'https://live.staticflickr.com/65535/52138522411_ed3ac81b33_m.jpg',
    comments: [
      {
        id: '1654965817514-494d-991a-2cd1bf0857ac',
        body: 'so fat she hasn’t got cellulite, she’s got celluheavy',
        userId: '60',
      },
      {
        id: '1654965817514-46c7-9316-f9ccb4a71c0b',
        body: 'so fat not even Dora can explore her',
        userId: '3',
      },
      {
        id: '1654965817514-496c-ae49-d9876b13110f',
        body: 'so fat she don’t need no internet – she’s already world wide',
        userId: '74',
      },
    ],
  },
];

describe('getDataByImageId function use-cases', () => {
  test('return image object if imageId found in response', () => {
    const expectedResult = {
      id: '52138522411',
      title: 'HOLLAND @  One of the 7  Tourist Spot I. Visited in Europe',
      imageUrl:
        'https://live.staticflickr.com/65535/52138522411_ed3ac81b33_m.jpg',
      comments: [
        {
          id: '1654965817514-494d-991a-2cd1bf0857ac',
          body: 'so fat she hasn’t got cellulite, she’s got celluheavy',
          userId: '60',
        },
        {
          id: '1654965817514-46c7-9316-f9ccb4a71c0b',
          body: 'so fat not even Dora can explore her',
          userId: '3',
        },
        {
          id: '1654965817514-496c-ae49-d9876b13110f',
          body: 'so fat she don’t need no internet – she’s already world wide',
          userId: '74',
        },
      ],
    };
    expect(getDataByImageId({imageId: '52138522411', images})).toEqual(
      expectedResult,
    );
  });
  test('return empty image object if imageId not found in response', () => {
    expect(getDataByImageId({imageId: '5213852241331', images})).toEqual(
      undefined,
    );
  });
});

describe('editComment function use-cases', () => {
  test('return images array with edited comment', () => {
    const expectedResult = [
      {
        id: '52138522411',
        title: 'HOLLAND @  One of the 7  Tourist Spot I. Visited in Europe',
        imageUrl:
          'https://live.staticflickr.com/65535/52138522411_ed3ac81b33_m.jpg',
        comments: [
          {
            id: '1654965817514-494d-991a-2cd1bf0857ac',
            body: 'so fat she hasn’t got cellulite, she’s got celluheavy',
            userId: '60',
          },
          {
            id: '1654965817514-46c7-9316-f9ccb4a71c0b',
            body: 'so fat not even Dora can explore her zille',
            userId: '3',
          },
          {
            id: '1654965817514-496c-ae49-d9876b13110f',
            body: 'so fat she don’t need no internet – she’s already world wide',
            userId: '74',
          },
        ],
      },
    ];
    expect(
      editComment({
        imageId: '52138522411',
        images,
        commentId: '1654965817514-46c7-9316-f9ccb4a71c0b',
        comment: 'so fat not even Dora can explore her zille',
      }),
    ).toEqual(expectedResult);
  });
});

describe('removeComment function use-cases', () => {
  test('return images array with deleted comment', () => {
    const expectedResult = [
      {
        id: '52138522411',
        title: 'HOLLAND @  One of the 7  Tourist Spot I. Visited in Europe',
        imageUrl:
          'https://live.staticflickr.com/65535/52138522411_ed3ac81b33_m.jpg',
        comments: [
          {
            id: '1654965817514-494d-991a-2cd1bf0857ac',
            body: 'so fat she hasn’t got cellulite, she’s got celluheavy',
            userId: '60',
          },
          {
            id: '1654965817514-496c-ae49-d9876b13110f',
            body: 'so fat she don’t need no internet – she’s already world wide',
            userId: '74',
          },
        ],
      },
    ];
    expect(
      removeComment({
        imageId: '52138522411',
        images,
        commentId: '1654965817514-46c7-9316-f9ccb4a71c0b',
      }),
    ).toEqual(expectedResult);
  });
});
