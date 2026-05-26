public interface IRedisService<TMessage>
{
    Task PublishAsync(
        string channel,
        TMessage content
        );

    Task SubscribeAsync(
        string channel,
        Func<TMessage, Task> handler
        );
}
