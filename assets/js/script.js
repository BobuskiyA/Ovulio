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
	const box = document.querySelector('.technology__first-screen');
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


$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-white').fadeIn();
		return false;
	});
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-white').fadeOut();
		return false;
	});    

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-white').fadeOut();
		}
	});
	
	$('.popup-white').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();                 
		}
	});
});


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
			function setTimeOnWheelFirst() {
				document.onwheel = function ( event ) {

					let fisrtScreen = document.querySelector('.first-screen');
					let technologyFirstScreen = document.querySelector('.technology__first-screen');
					let technologySecondScreen = document.querySelector('.technology__second-screen');
					let technologyFirstBranch = document.querySelector('.branch.branch-yelow.branch-blue');
					let technologySecondBranch = document.querySelector('.branch.branch-white__first.branch-pink');
					let technologyThirdBranch = document.querySelector('.branch.branch-white__second.branch-size');
					let technologyBranch = document.querySelector('.branch-yelow__technology');
					let technologyIntroText = document.querySelector('.introduction-text.intro-text__small');
					let technologyCloud = document.querySelector('.cloud.cloud-size');
					let technologyPoints = document.querySelector('.points.points-size');
					
					technologyFirstScreen.classList.remove('active');
					technologySecondScreen.classList.remove('active');

					if( event.deltaY > 0 ) {
						$('.technology__first-screen').fadeIn(1000);
						technologyFirstScreen.classList.add('active');
						$('.first-screen').fadeOut(1000);
						fisrtScreen.classList.remove('active');
						technologyFirstBranch.classList.remove('first-position');
						technologySecondBranch.classList.remove('first-position');
						technologyThirdBranch.classList.remove('first-position');
						technologyBranch.classList.remove('deactive');
						technologyIntroText.classList.add('none');
						technologyCloud.classList.add('none');
						technologyIntroText.classList.remove('first-none');
						technologyCloud.classList.remove('first-none');
						technologyPoints.classList.remove('first-position');
					} else {
						return;
					}
				}
			}
			setTimeout(setTimeOnWheelFirst, 3500);
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
			function setTimeOnWheelSecond() {
				document.onwheel = function ( event ) {

					let fisrtScreen = document.querySelector('.first-screen');
					let technologyFirstScreen = document.querySelector('.technology__first-screen');
					let technologySecondScreen = document.querySelector('.technology__second-screen');
					let technologyFirstBranch = document.querySelector('.branch.branch-yelow.branch-blue');
					let technologySecondBranch = document.querySelector('.branch.branch-white__first.branch-pink');
					let technologyThirdBranch = document.querySelector('.branch.branch-white__second.branch-size');
					let technologyBranch = document.querySelector('.branch-yelow__technology');
					let technologyIntroText = document.querySelector('.introduction-text.intro-text__small');
					let technologyCloud = document.querySelector('.cloud.cloud-size');
					let technologyPoints = document.querySelector('.points.points-size');

					fisrtScreen.classList.remove('active');
					technologySecondScreen.classList.remove('active');
					
					if( event.deltaY > 0 ) {
						$('.technology__first-screen').fadeOut(1000);
						technologyFirstScreen.classList.remove('active');
						$('.technology__second-screen').fadeIn(1000);
						technologySecondScreen.classList.add('active');
						
						technologyFirstBranch.classList.add('second-position');
						technologySecondBranch.classList.add('second-position');
						technologyThirdBranch.classList.add('second-position');
						technologyBranch.classList.add('second-position');
					} else {
						$('.technology__first-screen').fadeOut(1000);
						technologyFirstScreen.classList.remove('active');
						$('.first-screen').fadeIn(1000);
						fisrtScreen.classList.add('active');

						technologyBranch.classList.remove('second-position');
						technologyFirstBranch.classList.add('first-position');
						technologySecondBranch.classList.add('first-position');
						technologyThirdBranch.classList.add('first-position');
						technologyBranch.classList.add('deactive');
						technologyIntroText.classList.remove('none');
						technologyCloud.classList.remove('none');
						technologyIntroText.classList.add('first-none');
						technologyCloud.classList.add('first-none');
						technologyPoints.classList.add('first-position');
					}
				}
			}
			setTimeout(setTimeOnWheelSecond, 3500);
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
			function setTimeOnWheelThird() {
				document.onwheel = function ( event ) {

					let technologyFirstScreen = document.querySelector('.technology__first-screen');
					let technologySecondScreen = document.querySelector('.technology__second-screen');
					let instruction = document.querySelector('.instruction');
					let branchBlue = document.querySelector('.branch.branch-yelow.branch-blue');
					let branchWhite = document.querySelector('.branch.branch-white__first.branch-pink');
					let branchPink = document.querySelector('.branch.branch-white__second.branch-size');
					let branchYelow = document.querySelector('.branch-yelow__technology');
					let technologyFirstBranch = document.querySelector('.branch.branch-yelow.branch-blue');

					if( event.deltaY > 0 ) {
						$('.technology__second-screen').fadeOut(1000);
						technologySecondScreen.classList.remove('active');
						$('.instruction').fadeIn(1000);
						instruction.classList.add('active');

						branchBlue.classList.add('third-position');
						branchWhite.classList.add('third-position');
						branchPink.classList.add('third-position');
						branchYelow.classList.add('third-position');
					} else {
						$('.technology__second-screen').fadeOut(1000);
						technologySecondScreen.classList.remove('active');
						$('.technology__first-screen').fadeIn(1000);
						technologyFirstScreen.classList.add('active');
						
						technologyFirstBranch.classList.remove('second-position');
						branchWhite.classList.remove('second-position');
						branchPink.classList.remove('second-position');
						branchYelow.classList.remove('second-position');

					}
				}
			}
			setTimeout(setTimeOnWheelThird, 3500);
		}
	});
	}, options);
	
	observer.observe(box);
}
technologySecondScreen();


function instruction() {
	const box = document.querySelector('.instruction');
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
	};
	
	const observer = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			function setTimeOnWheelInstruction() {
				document.onwheel = function ( event ) {

					let technologySecondScreen = document.querySelector('.technology__second-screen');
					let instruction = document.querySelector('.instruction');
					let kit = document.querySelector('.kit');
					let branchBlue = document.querySelector('.branch.branch-yelow.branch-blue');
					let branchWhite = document.querySelector('.branch.branch-white__first.branch-pink');
					let branchPink = document.querySelector('.branch.branch-white__second.branch-size');
					let branchYelow = document.querySelector('.branch-yelow__technology');

					if( event.deltaY > 0 ) {
						$('.kit').fadeIn(1000);
						kit.classList.add('active');
						$('.instruction').fadeOut(1000);
						instruction.classList.remove('active');

						branchWhite.classList.add('kit-position');
						branchPink.classList.add('kit-position');
						branchYelow.classList.add('kit-position');
					} else {
						$('.instruction').fadeOut(1000);
						instruction.classList.remove('active');
						$('.technology__second-screen').fadeIn(1000);
						technologySecondScreen.classList.add('active');

						branchBlue.classList.add('third-position');
						branchWhite.classList.remove('third-position');
						branchPink.classList.remove('third-position');
						branchYelow.classList.remove('third-position');
					}
				}
			}
			setTimeout(setTimeOnWheelInstruction, 3500);
		}
	});
	}, options);
	
	observer.observe(box);
}
instruction();


function kit() {
	const box = document.querySelector('.kit');
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
	};
	
	const observer = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			function setTimeOnWheelKit() {
				document.onwheel = function ( event ) {

					let team = document.querySelector('.team');
					let instruction = document.querySelector('.instruction');
					let kit = document.querySelector('.kit');
					let branchWhite = document.querySelector('.branch.branch-white__first.branch-pink');
					let branchPink = document.querySelector('.branch.branch-white__second.branch-size');
					let branchYelow = document.querySelector('.branch-yelow__technology');

					if( event.deltaY > 0 ) {
						$('.team').fadeIn(1000);
						team.classList.add('active');
						$('.kit').fadeOut(1000);
						kit.classList.remove('active')

						branchWhite.classList.add('team-position');
						branchPink.classList.add('team-position');
						branchYelow.classList.add('team-position');
					} else {
						$('.kit').fadeOut(1000);
						kit.classList.remove('active');
						$('.instruction').fadeIn(1000);
						instruction.classList.add('active');

						branchWhite.classList.remove('kit-position');
						branchPink.classList.remove('kit-position');
						branchYelow.classList.remove('kit-position');
					}
				}
			}
			setTimeout(setTimeOnWheelKit, 3500);
		}
	});
	}, options);
	
	observer.observe(box);
}
kit();


function team() {
	const box = document.querySelector('.team');
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
	};
	
	const observer = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			function setTimeOnWheelTeam() {
				document.onwheel = function ( event ) {

					let team = document.querySelector('.team');
					let kit = document.querySelector('.kit');
					let branchWhite = document.querySelector('.branch.branch-white__first.branch-pink');
					let branchPink = document.querySelector('.branch.branch-white__second.branch-size');
					let branchYelow = document.querySelector('.branch-yelow__technology');

					if( event.deltaY > 0 ) {
						return
					} else {
						$('.team').fadeOut(1000);
						team.classList.remove('active');
						$('.kit').fadeIn(1000);
						kit.classList.add('active');

						branchWhite.classList.remove('team-position');
						branchPink.classList.remove('team-position');
						branchYelow.classList.remove('team-position');
					}
				}
			}
			setTimeout(setTimeOnWheelTeam, 3500);
		}
	});
	}, options);
	
	observer.observe(box);
}
team();