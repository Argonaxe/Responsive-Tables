// A self invoked function to keep things clean. 
(function() {
	
	// A variable used within the process function to keep track of index.
	let i = 0;
	
	// A short hand for add event listenet.
  const addEvent = (el, ev, cb) =>  el.addEventListener(ev, cb, false);

	// A simple way to implement document.ready.
  const ready = x => addEvent(document, "DOMContentLoaded", x);

	// A short hand function for querySelectorAll.
  const $e = (x, e) => e == null ? document.querySelectorAll(x) : e.querySelectorAll(x);
	
	// A short hand function for setAttribute.
	const set = (td, h) => td.setAttribute("data-heading", h);
  
	// A short hand function to see if there's a th tag at index i, 
	// if not, return an empty string. 
	const getTh = (ths, i) => h = ths[i] != null ? ths[i].textContent : '';
	
	// A fnction to iterate over each td within the table.  
	const process = (tds, ths) => tds.forEach(td => {
		set(td, getTh(ths, i));
		console.log(getTh(ths, i));
		i == ths.length ? i = 0 : i += 1;
	});
	
	// A simple function that will iterate over each table, setting the 'data-heading'
	// attribute(s).
	const resptables = () => $e('table').forEach(tbl => process($e('td', tbl), $e('th', tbl)));

	// Now to simply run the function. 
  ready(resptables);
})();
