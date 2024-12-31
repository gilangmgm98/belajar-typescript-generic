describe('no generic', () => {
    class Data {
        value : any;

        constructor(value: any) {
            this.value = value;
        }
    }

    it('should support accept all values', () => {
        const data = new Data(123);
        data.value = "Gilang";
        data.value = false;
    })

})