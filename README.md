# This is my repository
### My name is CAT
![my photo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-DWaIdrLz5izk6wNS_5uUCcphZ1bkFVM8w&s)
## I'm javascript developer.
*There is Example of my code:*
```javascript
let cc = 0;
$("#btn").click(function () {
    cc = cc + 1;
    if (cc == 1) $(".box").animate({ left: '200px', width: '150px'});
    else if (cc == 2) $(".box").animate({ top: '200px', width: '150px' });
    else if (cc == 3) $(".box").animate({ left: '10px', width: '150px', opacity: '0.5', borderRadius: '50%' });
    else {
        cc = 0;
        $(".box").animate({ top: '30px' });
    }
});
