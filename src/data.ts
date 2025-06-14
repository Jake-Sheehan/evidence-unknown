export interface Case {
    caseNum: number;
    location: string;
    date: Date;
    title: string;
    description: string;
    signature: string;
    imgUrl: string;
    videoUrl: string;
}

export function getCase(signature: string) {
    return caseData.find((c) => c.signature === signature);
}

export const caseData: Case[] = [
    {
        caseNum: 1,
        date: new Date('2023-10-01'),
        location: 'New York, NY',
        title: 'Case 1',
        description: 'Description for Case 1',
        signature: 'QmTzQ1eZTzb1K1jxF9yME2Ht5LZso6AXPhAbn5QZqRGZga',
        imgUrl: 'https://picsum.photos/350/197',
        videoUrl: '/videos/sample.mp4',
    },
    {
        caseNum: 2,
        date: new Date('2023-10-02'),
        location: 'Los Angeles, CA',
        title: 'Case 2',
        description: 'Description for Case 2',
        signature: 'QmTzQ1eZTzb1K1jxF9yME2Ht5LZso6AXPhAbn5QZqRGZgb',
        imgUrl: 'https://picsum.photos/350/197',
        videoUrl: '/videos/sample.mp4',
    },
    {
        caseNum: 3,
        date: new Date('2023-10-03'),
        location: 'Chicago, IL',
        title: 'Case 3',
        description: 'Description for Case 3',
        signature: 'QmTzQ1eZTzb1K1jxF9yME2Ht5LZso6AXPhAbn5QZqRGZgc',
        imgUrl: 'https://picsum.photos/350/197',
        videoUrl: '/videos/sample.mp4',
    },
    {
        caseNum: 4,
        date: new Date('2023-10-04'),
        location: 'Houston, TX',
        title: 'Case 4',
        description: 'Description for Case 4',
        signature: 'QmTzQ1eZTzb1K1jxF9yME2Ht5LZso6AXPhAbn5QZqRGZgd',
        imgUrl: 'https://picsum.photos/350/197',
        videoUrl: '/videos/sample.mp4',
    },
    {
        caseNum: 5,
        date: new Date('2023-10-05'),
        location: 'Phoenix, AZ',
        title: 'Case 5',
        description: 'Description for Case 5',
        signature: 'QmTzQ1eZTzb1K1jxF9yME2Ht5LZso6AXPhAbn5QZqRGZge',
        imgUrl: 'https://picsum.photos/350/197',
        videoUrl: '/videos/sample.mp4',
    },
    {
        caseNum: 6,
        date: new Date('2023-10-06'),
        location: 'Philadelphia, PA',
        title: 'Case 6',
        description: 'Description for Case 6',
        signature: 'QmTzQ1eZTzb1K1jxF9yME2Ht5LZso6AXPhAbn5QZqRGZgf',
        imgUrl: 'https://picsum.photos/350/197',
        videoUrl: '/videos/sample.mp4',
    },
    {
        caseNum: 7,
        date: new Date('2023-10-07'),
        location: 'San Antonio, TX',
        title: 'Case 7',
        description: 'Description for Case 7',
        signature: 'QmTzQ1eZTzb1K1jxF9yME2Ht5LZso6AXPhAbn5QZqRGZgg',
        imgUrl: 'https://picsum.photos/350/197',
        videoUrl: '/videos/sample.mp4',
    },
];
