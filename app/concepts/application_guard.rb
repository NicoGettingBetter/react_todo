class ApplicationGuard
  include Uber::Callable

  def call(*args)
    authorized?(*args) || raise(ApplicationError::Forbidden)
  end

  def authorized?(**)
    raise(NotImplementedError)
  end
end
