describe('Universal Truths', () => {
    it('should do math', () => {
        expect(1 + 2).toEqual(3);

        expect(5).toBeGreaterThan(1);
    });

    it('should validate bool', () => {
        expect(1 == 1).toBe(true);
    });

    xit('shoudl skip this', () => {
        expect(4).toEqual(40);
    })

}); 