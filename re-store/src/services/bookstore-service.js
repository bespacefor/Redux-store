export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Multithreaded JavaScript: Concurrency Beyond the Event Loop',
            author: 'Thomas Hunter II & Bryan English',
            price: '37',
            coverImg: 'https://m.media-amazon.com/images/P/1098104439.01._SCLZZZZZZZ_SX500_.jpg'
        },
        {
            id: 2,
            title: 'You Don\'t Know JS: Async & Performance',
            author: ' Kyle Simpson',
            price: '10',
            coverImg: 'https://m.media-amazon.com/images/I/51Kb27EcNPL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id: 3,
            title: 'Learning React: Modern Patterns for Developing React Apps 2nd Edition',
            author: 'Alex Banks',
            price: '39',
            coverImg: 'https://m.media-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg'
        },
        {
            id: 4,
            title: 'Programming TypeScript: Making Your JavaScript Applications Scale',
            author: 'Boris Cherny',
            price: '29',
            coverImg: 'https://m.media-amazon.com/images/I/51csAp-ykgL._SX379_BO1,204,203,200_.jpg'
        },
        {
            id: 5,
            title: 'Site Reliability Engineering: How Google Runs Production Systems',
            author: 'Jennifer Petoff',
            price: '14',
            coverImg: 'https://m.media-amazon.com/images/I/51XswOmuLqL._SX379_BO1,204,203,200_.jpg'
        },
        {
            id: 6,
            title: 'Learning PHP, MySQL & JavaScript: A Step-by-Step Guide to Creating Dynamic Websites',
            author: 'Robin Nixon',
            price: '37',
            coverImg: 'https://m.media-amazon.com/images/P/1492093823.01._SCLZZZZZZZ_SX500_.jpg'
        },
        {
            id: 7,
            title: 'Designing Interfaces: Patterns for Effective Interaction Design',
            author: 'Jenifer Tidwell',
            price: '28',
            coverImg: 'https://m.media-amazon.com/images/I/51CwskMLS5L._SX379_BO1,204,203,200_.jpg'
        },
        {
            id: 8,
            title: 'Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems',
            author: 'Martin Kleppmann',
            price: '22',
            coverImg: 'https://m.media-amazon.com/images/I/51ZSpMl1-LL._SX379_BO1,204,203,200_.jpg'
        },
        {
            id: 9,
            title: 'Refactoring at Scale: Regaining Control of Your Codebase',
            author: 'Maude Lemaire',
            price: '22',
            coverImg: 'https://m.media-amazon.com/images/I/51vI2Nq56JL._SX379_BO1,204,203,200_.jpg'
        },
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error());
                } resolve(this.data);
            }, 700);
        });
    }
}
