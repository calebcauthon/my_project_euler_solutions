
# add is_divisible_by to make code more readable
class Integer
  def is_divisible_by(number)
    self / number == self / (number * 1.0)
  end
end

module Solution1

  def self.sum_multiples_of_3_and_5(up_to)
    all_3s_and_5s(up_to).reduce(:+)
  end

  private

  def self.all_3s_and_5s(up_to)
    (1...up_to).select{|x| x.is_divisible_by(5) || x.is_divisible_by(3)}
  end
end
