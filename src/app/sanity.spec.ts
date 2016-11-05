describe('Universal Truths', () => {
    it('should do math', () => {
        expect(1 + 2).toEqual(3);

        expect(5).toBeGreaterThan(1);
    });

    it('should validate bool', () => {
        expect(1 == 1).toBe(true);
    });

    it('passes if subject is null', function() {
        expect(null).toBeNull();
    });

    it('fails if subject is undefined', function() {
        expect(undefined).not.toBeNull();
    });

    it('fails if subject is no null', function() {
        expect({}).not.toBeNull();
    });

    xit('shoudl skip this', () => {
        expect(4).toEqual(40);
    })

}); 