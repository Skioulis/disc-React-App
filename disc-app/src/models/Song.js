// JavaScript

export default class Song {
    /**
     * @param {Object} props
     * @param {number} props.id
     * @param {string} props.title
     * @param {string} [props.lyrics]
     * @param {Array<number>|Array<object>} [props.disks]   // disk IDs or disk objects
     * @param {Array<number>|Array<object>} [props.people]  // people IDs or person objects
     * @param {string} [props.notes]
     */
    constructor({
                    id,
                    title,
                    lyrics = '',
                    disks = [],
                    people = [],
                    notes = '',
                } = {}) {
        this.id = id;
        this.title = title;
        this.lyrics = lyrics;
        this.disks = disks;
        this.people = people;
        this.notes = notes;
    }
}