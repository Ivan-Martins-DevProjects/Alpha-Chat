public interface IMessage<T>
{
    T Content { get; set; }
    string TicketId { get; set; }
    string SenderId { get; set; }
    string Type { get; set; }
    int Length { get; set; }
}
