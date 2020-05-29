import axios from 'axios'

export default {
    getBannedList() {
        return axios.get(
            `https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg`,
        )
    },
}
