


puts (1...1000).select{|x| x / 5 == x / 5.0 || x / 3 == x / 3.0}.inject(:+)
