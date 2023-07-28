"use strict";

function observeIntroGroup() {
	const box = document.querySelector('.introduction-group');
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
	};
	
	const observer = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		let branchBlue = document.querySelector('.branch-yelow');
		let branchPink = document.querySelector('.branch-white__first');
		let branchSize = document.querySelector('.branch-white__second');
		let introSmallText = document.querySelector('.introduction-text');
		let introBackground = document.querySelector('.introduction-background');
		let introCloud = document.querySelector('.cloud');
		let introPoints = document.querySelector('.points');
		if (entry.isIntersecting) {
			function addClass() {
				branchBlue.classList.add('branch-blue');
				branchPink.classList.add('branch-pink');
				branchSize.classList.add('branch-size');
				introSmallText.classList.add('intro-text__small');
				introBackground.classList.add('intro-backgound__size');
				introCloud.classList.add('cloud-size');
				introPoints.classList.add('points-size');
			}
			setTimeout(addClass, 2500);
		} else {
			branchBlue.classList.remove('branch-blue');
			branchPink.classList.remove('branch-pink');
			branchSize.classList.remove('branch-size');
			introSmallText.classList.remove('intro-text__small');
			introBackground.classList.remove('intro-backgound__size');
			introCloud.classList.remove('cloud-size');
			introPoints.classList.remove('points-size');
		}
	});
	}, options);
	
	observer.observe(box);
}
observeIntroGroup();

function observeFirstScreen() {
	const box = document.querySelector('.first-screen');
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
	};
	
	const observer = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		let header = document.querySelector('.header');
		let introText = document.querySelector('.introduction-text__second');
		if (entry.isIntersecting) {
			function addClass() {
				header.classList.add('header-active');
				introText.classList.add('intro-text');
			}
			setTimeout(addClass, 2500);
		} else {
			introText.classList.remove('intro-text');
		}
	});
	}, options);
	
	observer.observe(box);
}
observeFirstScreen();


function observeTechnology() {
	const box = document.querySelector('.technology');
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
	};
	
	const observer = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {

		let branchPosition = document.querySelectorAll('.branch');
		let cloudNone = document.querySelector('.cloud');
		let introTextTechnology = document.querySelector('.introduction-text');
		let positionPosition = document.querySelector('.points-size');

		if (entry.isIntersecting) {
			console.log( branchPosition );
			branchPosition.forEach((elem) => {
				elem.classList.add('position');
			});
			positionPosition.classList.add('position')
			cloudNone.classList.add('none');
			introTextTechnology.classList.add('none')
		}
	});
	}, options);
	
	observer.observe(box);
}
observeTechnology();


function fisrtScreen() {
	const box = document.querySelector('.first-screen');
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
	};
	
	const observer = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			console.log(entry);
			function setTimeOnWheel() {
				document.onwheel = function ( event ) {

					let fisrtScreen = document.querySelector('.first-screen');
					let technologyFirstScreen = document.querySelector('.technology__first-screen');
					let technologySecondScreen = document.querySelector('.technology__second-screen');
					
					technologyFirstScreen.classList.remove('active');
					technologySecondScreen.classList.remove('active');

					if( event.deltaY > 0 ) {
						$('.technology__first-screen').fadeIn(1000);
						technologyFirstScreen.classList.add('active');
						$('.first-screen').fadeOut(1000);
						fisrtScreen.classList.remove('active');
					} else {
						return;
					}
				}
			}
			setTimeout(setTimeOnWheel, 3500);
		}
	});
	}, options);
	
	observer.observe(box);
}
fisrtScreen();

function technologyFirstScreen() {
	const box = document.querySelector('.technology__first-screen');
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
	};
	
	const observer = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			console.log(entry);
			function setTimeOnWheel() {
				document.onwheel = function ( event ) {

					let fisrtScreen = document.querySelector('.first-screen');
					let technologyFirstScreen = document.querySelector('.technology__first-screen');
					let technologySecondScreen = document.querySelector('.technology__second-screen');

					fisrtScreen.classList.remove('active');
					technologySecondScreen.classList.remove('active');
					
					if( event.deltaY > 0 ) {
						$('.technology__first-screen').fadeOut(1000);
						technologyFirstScreen.classList.remove('active');
						$('.tevhnology__second-screen').fadeIn(1000);
						technologySecondScreen.classList.add('active');
					} else {
						$('.technology__first-screen').fadeOut(1000);
						technologyFirstScreen.classList.remove('active');
						$('.first-screen').fadeIn(1000);
						fisrtScreen.classList.add('active');
						
					}
				}
			}
			setTimeout(setTimeOnWheel, 3500);
		}
	});
	}, options);
	
	observer.observe(box);
}
technologyFirstScreen();

function technologySecondScreen() {
	const box = document.querySelector('.technology__second-screen');
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
	};
	
	const observer = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			console.log(entry);
			function setTimeOnWheel() {
				document.onwheel = function ( event ) {

					let fisrtScreen = document.querySelector('.first-screen');
					let technologyFirstScreen = document.querySelector('.technology__first-screen');
					let technologySecondScreen = document.querySelector('.technology__second-screen');
					
					fisrtScreen.classList.remove('active');
					technologyFirstScreen.classList.remove('active');

					if( event.deltaY > 0 ) {
						return;
					} else {
						technologyFirstScreen.classList.add('active');
						technologySecondScreen.classList.remove('active');
					}
				}
			}
			setTimeout(setTimeOnWheel, 3500);
		}
	});
	}, options);
	
	observer.observe(box);
}
technologySecondScreen();
