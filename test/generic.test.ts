describe('generic', () => {
    class GenericData<T> {
        value: T;

        constructor(value: T) {
            this.value = value;
        }

        getVal(): T {
            return this.value;
        }

        setValue(value: T) {
            this.value = value;
        }
    }

    it('should can only accept one type', () => {
        const gen = new GenericData<number>(10);
        expect(gen.value).toBe(10);
        // gen.value ="Gilang"
    });

    it('should support multiple types', () => {
        const dataString = new GenericData<string>("Gilang");
        expect(dataString.value).toBe("Gilang");
        // dataString.value = 10

        let modifiedDataString = dataString.value.toUpperCase();
        expect(modifiedDataString).toBe("GILANG");

        const dataNumber = new GenericData<number>(10);
        expect(dataNumber.value).toBe(10);
    })

    // Generic Functions
    function identity<T>(arg: T): T {
        return arg;
    }
    // Generic Functions

    it('should support generic functions', () => {
        const resultString = identity<string>("Gilang");
        expect(resultString).toBe("Gilang");

        const resultNumber = identity<number>(10);
        expect(resultNumber).toBe(10);

        const resultObject = identity<object>({ name: "Gilang" });
        expect(resultObject).toEqual({ name: "Gilang" });
    })

    it('support function in generic class', () => {
        let sData = new GenericData<string>('Gilang')
        sData.setValue('GILANG')
        let newData = sData.getVal()
        expect(sData.getVal()).toBe('GILANG')
        expect(newData).toBe('GILANG')

        let nData = new GenericData<number>(10)
        nData.setValue(20)
        let newNumber = nData.getVal()
        expect(nData.getVal()).toBe(20)
        expect(newNumber).toBe(20)

        let oData = new GenericData<{ name: string }>({ name: 'Gilang' })
        oData.setValue({ name: 'GILANG' })
        let newObject = oData.getVal()
        expect(oData.getVal()).toEqual({ name: 'GILANG' })
        expect(newObject).toEqual({ name: 'GILANG' })
    })

    class Entry<K, V> {
        constructor(public key: K, public value: V) {

        }
    }

    class Triple<K, V, T> {
        constructor(public first: K, public second: V, public third: T) {

        }
    }

    it('should support multiple generic type', () => {

        let entry = new Entry<string, number>('key', 10);
        expect(entry.key).toBe('key');
        expect(entry.value).toBe(10);

        let triple = new Triple<string, number, boolean>('key', 10, true);
        expect(triple.first).toBe('key');
        expect(triple.second).toBe(10);
        expect(triple.third).toBe(true);

    })

    it('should support optional generic type', () => {
        const entry = new Entry('Gilang', 26)
        expect(entry.key).toBe('Gilang');
        expect(entry.value).toBe(26);
    })

    class SimpleGeneric<T> {
        private value?: T;

        setValue(value: T) {
            this.value = value;
        }

        getValue(): T | undefined {
            return this.value;
        }
    }

    it('should create simple generic type', () => {
        let simpleGeneric = new SimpleGeneric();
        simpleGeneric.setValue('Gilang');
        expect(simpleGeneric.getValue()).toBe('Gilang');
        simpleGeneric.setValue(26);
        expect(simpleGeneric.getValue()).toBe(26);


        let simple = new SimpleGeneric<string>();
        simple.setValue('Radiodadidu')
        // simple.setValue(123)
        // simple.setValue(true)

        let simpleNumber = new SimpleGeneric<number>();
        simpleNumber.setValue(26)
        // simpleNumber.setValue('Radiodadidu')
        // simpleNumber.setValue(true)

        let simpleBoolean = new SimpleGeneric<boolean>();
        simpleBoolean.setValue(true)
        // simpleBoolean.setValue('Radiodadidu')
        // simpleBoolean.setValue(26)

    })
})