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

    class SimpleGenericWithDefault<T = string> {
        private value?: T;

        setValue(value: T) {
            this.value = value;
        }

        getValue(): T | undefined {
            return this.value;
        }
    }

    it('should create simple generic type with default type', () => {
        let simpleGeneric = new SimpleGenericWithDefault();
        simpleGeneric.setValue('Gilang');
        expect(simpleGeneric.getValue()).toBe('Gilang');
    });

    interface Employee {
        id: string;
        name: string;
    }

    interface Manager extends Employee {
        totalEmployee: number;

    }

    interface VP extends Manager {
        totalManager: number;

    }

    class EmlployeeData<T extends Employee> {
        constructor(public employee: T) {

        }
    }

    it('should support contstraint', () => {
        const data1 = new EmlployeeData<Employee>({
            id: '1',
            name: 'Naufal'
        });

        const data2 = new EmlployeeData<Manager>({
            id: '2',
            name: 'Ferdi',
            totalEmployee: 100
        });

        const data3 = new EmlployeeData<VP>({
            id: '3',
            name: 'Gilang',
            totalEmployee: 100,
            totalManager: 50
        });
    })

    it('should support array', () => {
        const arr = new Array<string>()

        arr.push('Gilang');
        arr.push('Ferdi');
        arr.push('Naufal');

        expect(arr[0]).toBe('Gilang');
        expect(arr[1]).toBe('Ferdi');
        expect(arr[2]).toBe('Naufal');

        const arr2 = new Array<number>()
        arr2.push(10);
        arr2.push(20);
        arr2.push(30);
        expect(arr2[0]).toBe(10);
        expect(arr2[1]).toBe(20);
        expect(arr2[2]).toBe(30);
        expect(arr2[3]).toBeUndefined(); // out of range
        arr2[3] = 40; // assign value
        expect(arr2[3]).toBe(40);
    })

    it('should support set', () => {
        const set = new Set<string>()
        set.add('Gilang1');
        set.add('Naufal');
        set.add('Ferdi');
        set.add('Gilang');
        // console.info(`before ${set}`);
        expect(set.has('Gilang1')).toBe(true);
        set.delete('Gilang1');
        expect(set.has('Gilang1')).toBe(false);
        expect(set.size).toBe(3);

        for (let item of set) {
            // console.info(item);
        }
        // console.info(`after ${set}`);
        // expect([...set]).toEqual(['Ferdi', 'Naufal']);

    })

    it('should support map', () => {
        const map = new Map<string, number>()
        map.set('Gilang', 26);
        map.set('Ferdi', 28);
        map.set('Naufal', 30);
        map.set('Gilang', 26);
        // console.info(`before ${map}`);
        for (let item of map) {
            console.info(item);
        }
        expect(map.get('Gilang')).toBe(26);
        map.delete('Gilang');
        expect(map.has('Gilang')).toBe(false);
        expect(map.size).toBe(2);
    })

    async function fetchData(value: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                if (value === 'error' || value === '' || value === undefined) {
                    reject(`Not Found`);
                    // reject(new Error('Fetch error'))
                } else {
                    resolve(`Data: ${value}`)
                }
            }, 1000)
        })
    }

    it('should support promises', async () => {
        const result = await fetchData('Gilang')
        expect(result).toBe("Data: Gilang")
        console.info(result)

        try {
            const res = await fetchData('Zack')
            console.info(res)

        } catch (err) {
            expect(err).toBe(`Not Found`)
        }
    })
})