hackathon = {}

hackathon.scrollTo = (node)->
  hackathon.scrolling = true
  which = node.attr('href').replace('#','') if node.attr('href')

  if which is "overview" 
    top = 0
  else
    top = $("##{which}").offset().top

  $('body,html').animate
    scrollTop:top
  ,300,->
    hackathon.scrolling = false

$ ->
  $('.navLink').on 'click',(e)->
    e.preventDefault()
    hackathon.scrollTo $(@)