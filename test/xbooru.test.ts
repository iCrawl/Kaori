import 'jest-extended';
import { search } from '../src/index';

test('fetching 1 image from xbooru', async () => {
	const s = await search('xbooru');
	s.map(image => {
		expect(image.id).toBeNumber();
		expect(image.fileURL).toBeString();
		expect(image.tags).toBeArray();
	});
});

test('fetching 1 random image from xbooru', async () => {
	const s = await search('xbooru', { random: true });
	s.map(image => {
		expect(image.id).toBeNumber();
		expect(image.fileURL).toBeString();
		expect(image.tags).toBeArray();
	});
});

test('fetching 10 images from xbooru', async () => {
	const s = await search('xbooru', { limit: 10 });
	s.map(image => {
		expect(image.id).toBeNumber();
		expect(image.fileURL).toBeString();
		expect(image.tags).toBeArray();
	});
});

test('fetching 10 random images from xbooru', async () => {
	const s = await search('xbooru', { limit: 10, random: true });
	s.map(image => {
		expect(image.id).toBeNumber();
		expect(image.fileURL).toBeString();
		expect(image.tags).toBeArray();
	});
});
