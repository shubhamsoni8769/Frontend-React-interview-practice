1. Architecture

    1.1 Stateless
        - Does not have its internal state
        - depends on external api

    1.2 StateFul
        - Internal state handle 
        - can offer best search result
        - tries can be one of the solution
        - don't work for large list


2. Function requirment
    - on user input it should provide autocomplete result
    - It should work with generic data model
    - efficiently request cache data

    2.1 Config/property design
    type AutocompleteProps = {
        cacheSiza: number,
        maxResult: number,
        template: (data) => HTMLElement,
        getItemsApi: (fn) => Promise,
        styles : {},
        onItemUpdate: (e) => void,
        errorMessage: () => void,
        noItemfound: () => void,
        minQuerySize: number,
        debounceTime: number,
        cacheTime: number (default = 10000)
    }

    2.2 State Model design
        search query -> server Api -> state change -> re-render

        State = {
            resultMap: Map<string, data[]>, (can be LRU cache)
            cacheSize: number,
            minQuerySize: number,
            onQuery: () => Promise<T>
        }
    
3. Non functional requirment
    3.1 Network
        - Debounce
        - caching(browser or server side caching)
        - minimize external dependency and css bundling
        - CDN
    

    3.2 Performance/Rendering
        - virtulization
        - Infinite scrolling (If list is too long)
        - efficient classname
        - use CSS animation (more performant then javascript animation)
        - use server to do expensive search
        - use web worker for static data filtering


    3.3 Security

    3.4 Accessbility
        - keyBoard navigation
        - use HTML 5 element
        - rem should be used so it word with respect to device size
        - focus item should be visible on view
        - ARIA attribute


4.Race condition handling 
 use Abortcontroller to cancel previous request
 resource - https://www.youtube.com/watch?v=_4Kjw_VVPHA
 https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect




tries
var Trie = function() {
    this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for(let i of word){
        if(!node[i]){
            node[i] = {}
        }
        node = node[i] 
    }
    node['end'] = 'end';
    // console.log(this.root)
};


/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
   for(let i of word){
       if(node[i]){
           node = node[i]
       }else{
           return false
       }
   }
    return node['end'] ? true : false
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
   let node = this.root;
   for(let i of prefix){
       if(!node[i]){
           return false
       }
       node = node[i]
   }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */