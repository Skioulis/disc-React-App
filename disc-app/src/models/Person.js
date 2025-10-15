export default class Person {
    /**
     * @param {Object} props
     * @param {number} props.peopleid
     * @param {string} props.name
     * @param {string} [props.notes]
     */
    constructor({ peopleid, name, notes = '' } = {}) {
        this.peopleid = peopleid;
        this.name = name;
        this.notes = notes;
    }
}