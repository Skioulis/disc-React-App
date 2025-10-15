// JavaScript

export default class Disc {
    /**
     * @param {Object} props
     * @param {number} props.diskid
     * @param {string} props.name
     * @param {string} props.company
     * @param {string} props.companyid
     * @param {string} props.size
     * @param {string} props.sakisid
     * @param {string} props.notes
     */
    constructor({
                    diskid,
                    name,
                    company,
                    companyid,
                    size,
                    sakisid,
                    notes,
                } = {}) {
        this.diskid = diskid;
        this.name = name;
        this.company = company;
        this.companyid = companyid;
        this.size = size;
        this.sakisid = sakisid;
        this.notes = notes;
    }
}

// Optional helper type via JSDoc if you want IDE hints elsewhere:
// /**
//  * @typedef {Object} DiscProps
//  * @property {number} diskid
//  * @property {string} name
//  * @property {string} company
//  * @property {string} companyid
//  * @property {string} size
//  * @property {string} sakisid
//  * @property {string} notes
//  */