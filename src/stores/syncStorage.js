import { isNull } from "lodash-es";

class SyncStorage {
  constructor(option) {
    /** init options */
    this.storage = (window && window[option.storage]);
    this.user = "user";
    this.token = "token";
  }

  /**
   * Pinia subscribe plugin function.
   * @param {Object} store Pinia instance
   */
  async subscribe(store) {
    // init and apply user state from storage
    this.initUserState(store);

    store.$subscribe((mutation, state) => {
      if (mutation.storeId === "user") {
        if (!isNull(state.token)) {
          this.setToStorage(`${this.token}`, state.token);
        }
        this.setToStorage(
          `${this.user}`,
          JSON.stringify(state.user),
        );
      }
    });
  }

  /**
   * Get user info from storage.
   */
  initUserState(store) {
    // const userState = this.getFromStorage(`${this.user}`);
    return false;
  }

  /**
   * Get data to storage.
   * @param {String} key
   * @param {String} value
   */
  setToStorage(key, value) {
    try {
      this.storage.setItem(key, value);
    } catch (err) {
      console.error(`[Pinia.SyncStorage] setItem storage failed: ${err}`);
      return false;
    }
    return true;
  }

  /**
   * Get data from storage.
   * @param {String} key
   */
  getFromStorage(key) {
    try {
      return this.storage.getItem(key);
    } catch (err) {
      console.error(`[Pinia.SyncStorage] getItem storage failed: ${err}`);
    }
    return "";
  }
}

export default function (store, syncStorageOption) {
  const syncStorage = new SyncStorage(syncStorageOption);
  return syncStorage.subscribe(store);
}
