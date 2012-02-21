
class Integer
  def is_divisible_by(number)
    self / number == self / (number * 1.0)
  end
end


puts (1...1000).select{|x| x.is_divisible_by(5) || x.is_divisible_by(3)}.reduce(:+)
