import 'jest-extended';
import { search } from '../src/index';

test('fetching 1 image from konachannet', async () => {
	const s = await search('konachannet');
	s.map(image => {
		expect(image.id).toBeNumber();
		expect(image.fileURL).toBeString();
		expect(image.tags).toBeArray();
		expect(image.score).toBeNumber();
	});
});

test('fetching 1 random image from konachannet', async () => {
	const s = await search('konachannet', { random: true });
	s.map(image => {
		expect(image.id).toBeNumber();
		expect(image.fileURL).toBeString();
		expect(image.tags).toBeArray();
		expect(image.score).toBeNumber();
	});
});

test('fetching 10 images from konachannet', async () => {
	const s = await search('konachannet', { limit: 10 });
	s.map(image => {
		expect(image.id).toBeNumber();
		expect(image.fileURL).toBeString();
		expect(image.tags).toBeArray();
		expect(image.score).toBeNumber();
	});
});

test('fetching 10 random images from konachannet', async () => {
	const s = await search('konachannet', { limit: 10, random: true });
	s.map(image => {
		expect(image.id).toBeNumber();
		expect(image.fileURL).toBeString();
		expect(image.tags).toBeArray();
		expect(image.score).toBeNumber();
	});
});
